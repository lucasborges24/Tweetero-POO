import authService from "../services/authService.js";

class AuthController {
  constructor() {
    this.signup = this.signup.bind(this);
  }

  signup(req, res) {
    const { username, avatar } = req.body;
    const { message, statusCode } = authService.signup(username, avatar);
    return res.status(statusCode).send(message);
  }
}

export default new AuthController();
