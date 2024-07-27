import {config as baseConfig} from './wdio.conf.js'
export const config = {
  ...baseConfig,
  hostname: 'localhost',
  port: 4444,
  services:['docker'],
  capabilities:[
    {
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
          args: ['--disable-gpu', '--disable-dev-shm-usage']
        }            
    
      },
      {
        maxInstances: 1,
        browserName: 'firefox',
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
          args: ['--disable-gpu', '--disable-dev-shm-usage']
        }      
      }
]
}
