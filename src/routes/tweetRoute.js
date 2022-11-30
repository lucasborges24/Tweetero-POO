import tweetController from "../controllers/tweetController.js";
import Route from "./index.js";

const tweetRoute = new Route();

tweetRoute.postRoute("/tweets", tweetController.postTweet);
tweetRoute.getRoute("/tweets/:username", tweetController.getTweetsByUser);
tweetRoute.getRoute("/tweets", tweetController.getTweets);

export default tweetRoute.router;
