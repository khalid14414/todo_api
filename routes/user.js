import { Router } from "express";
import { login, logout, register } from "../controllers/user.js";

const userRouter = Router();

// define router
userRouter.post('/user/register',register);
userRouter.post('/user/login',login);
userRouter.post('/user/logout',logout)


// export the router
export default userRouter;