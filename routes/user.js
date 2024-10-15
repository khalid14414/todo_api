import { Router } from "express";
import { loginUser, logoutUser, registerUser,updatedProfile } from "../controllers/user.js";
import {  userAvatarUpload } from "../middlewares/upload.js";

const userRouter = Router();

// define router
userRouter.post('/user/register',registerUser);
userRouter.post('/user/login',loginUser);
userRouter.post('/user/logout',logoutUser);
userRouter.post('/users/me',userAvatarUpload.single('avatar'),updatedProfile)


// export the router
export default userRouter;