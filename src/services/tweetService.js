import Errors from "../Utils/Errors.js";

class TweetService {
  constructor(usuarios) {
    this.usuarios = usuarios;
    this.tweets = [];
    this.postTweet = this.postTweet.bind(this);
    this.getTweets = this.getTweets.bind(this);
    this.getTweetsByUser = this.getTweetsByUser.bind(this);
  }

  postTweet(username, tweet, usuarios) {
    if (!username || !tweet) {
      throw Errors.badRequest("Todos os campos são obrigatórios!");
    }
    const user = usuarios.find((user) => user.username === username);
    if (!user) {
      throw Errors.unauthorized("username inválido!");
    }

    this.tweets.push({ username, tweet, avatar: user.avatar });

    return this.tweets;
  }

  getTweets(page) {
    if (page && page < 1) {
      throw Errors.badRequest("Informe uma página válida!");
    }
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    if (this.tweets.length <= 10 || !page) {
      return this.reverseTweets();
    }

    return [...this.tweets].reverse().slice(start, end);
  }

  getTweetsByUser(username) {
    return this.tweets.filter((t) => t.username === username);
  }

  reverseTweets() {
    return [...this.tweets].reverse();
  }
}

export default new TweetService();
