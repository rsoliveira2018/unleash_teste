import React from 'react';
import ReactDOM from 'react-dom';

import { FlagProvider, useFlag, useVariant } from '@unleash/proxy-client-react';

const config = {
  url: 'http://localhost:3303/proxy',
  clientKey: 'PROXY_SECRET',
  refreshInterval: 5,
  appName: 'pics',
  environment: 'dev',
};

const TestUseFlag = () => {
  const flag = useFlag('capybara1');
  console.log(flag);

  return flag ? <h1>FLAG ENABLED</h1> : <h1>FLAG DISABLED</h1>
}

const TestUseVariant = () => {
    const variant1 = useVariant('capybara1');
    console.log(variant1);

    return variant1.enabled ? <h2>VARIANT ENABLED</h2> : <h2>VARIANT DISABLED</h2>
}

ReactDOM.render(
  <React.StrictMode>
    <FlagProvider config={config}>
      {/* <TestUseFlag /> */}
      <TestUseVariant />
    </FlagProvider>
  </React.StrictMode>,
  document.getElementById('root')
);