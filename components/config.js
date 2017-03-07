const config = {
  proto: 'http',
  uri: '192.168.10.226',
  port: '6800',
  loc: 'jsonrpc',
};
const configUri = `${config.proto}://${config.uri}:${config.port}/${config.loc}`;

export default configUri;
