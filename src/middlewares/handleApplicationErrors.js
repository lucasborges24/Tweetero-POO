class HandleError {
  constructor() {
    this.error = this.error.bind(this);
  }

  error(err, req, res, next) {
    return res.status(err.httpStatus).send(err.message);
  }
}

export default new HandleError();
