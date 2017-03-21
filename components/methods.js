class Aria2Method {
  constructor(method, param) {
    this.method = method;
    this.param = param;
  }

  run() {
    return {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-charset': 'utf-8',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'qwer',
        method: this.method.toString(),
        param: [this.param],
      }),
    };
  }
}
