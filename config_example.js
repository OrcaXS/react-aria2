const config = {
  proto: 'http',
  uri: 'localhost',
  port: '6800',
  loc: 'jsonrpc',
};
const configUri = `${config.proto}://${config.uri}:${config.port}/${config.loc}`;

export default configUri;
