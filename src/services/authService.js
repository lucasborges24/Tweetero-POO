class authService {
  constructor() {
    this.usuarios = [];
    this.signup = this.signup.bind(this);
  }

  signup(username, avatar) {
    {
      if (!username || !avatar) {
        return {
          message: "Todos os campos são obrigatórios!",
          statusCode: 400,
        };
      }

      this.usuarios.push({ username, avatar });
      console.log(usuarios);
      return {
        message: "Tudo certo!",
        statusCode: 200,
      };
    }
  }
}

export default new authService();
