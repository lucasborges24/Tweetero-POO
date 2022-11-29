import authController from "../controllers/authController.js";
import Route from "./index.js";

const authRoute = new Route();

authRoute.postRoute("/sign-up", authController.signup);

export default authRoute.router;
