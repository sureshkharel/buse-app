const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://{dev-592092.okta.com}',
  token: '{00RqgnmNnlCtg20_NEaV8k-r4wA5D-PlrC8Cu3aSiw}'
});
  
module.exports = client;