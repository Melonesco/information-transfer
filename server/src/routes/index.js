import express from "express";
import commentRoute from "./comment.route.js";
import userRoute from "./user.route.js";
import postRoute from "./post.route.js";
import authRoute from "./auth.route.js";

const router = express.Router();

router.use("/", userRoute);
router.use("/", commentRoute);
router.use("/", postRoute);
router.use("/", authRoute);

export default router;
