class Errors {
  constructor() {
    this.badRequest = this.badRequest.bind(this);
    this.unauthorized = this.unauthorized.bind(this);
  }
  badRequest(message) {
    return {
      message,
      httpStatus: 400,
    };
  }

  unauthorized(message) {
    return {
      message,
      httpStatus: 401,
    };
  }
}

export default new Errors();
