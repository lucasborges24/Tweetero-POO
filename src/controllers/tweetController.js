import authService from "../services/authService.js";
import tweetService from "../services/tweetService.js";

class TweetController {
  constructor() {
    this.postTweet = this.postTweet.bind(this);
    this.getTweets = this.getTweets.bind(this);
    this.getTweetsByUser = this.getTweetsByUser.bind(this);
  }

  postTweet(req, res) {
    const { tweet, username } = req.body;
    tweetService.postTweet(username, tweet, authService.usuarios);
    res.status(201).send("OK, seu tweet foi criado");
  }

  getTweets(req, res) {
    const { page } = req.query;
    const tweets = tweetService.getTweets(page);
    res.status(200).send(tweets);
  }

  getTweetsByUser(req, res) {
    const { username } = req.params;

    const tweetsDoUsuario = tweetService.getTweetsByUser(username);

    res.status(200).send(tweetsDoUsuario);
  }
}

export default new TweetController();
