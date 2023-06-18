import express from "express";
import { checkAuth, handleValidationErrors } from "../../utils/index.js";
import * as PostController from "../controllers/PostController.js";

const router = express.Router({ mergeParams: true });

router.post(
  "/posts",
  checkAuth,
  handleValidationErrors,
  PostController.createPost
);
router.delete(
  "/posts/:id",
  checkAuth,
  handleValidationErrors,
  PostController.deletePost
);
router.get("/posts", handleValidationErrors, PostController.getAllPosts);
router.get(
  "/posts/:postId",
  handleValidationErrors,
  PostController.getPostById
);

export default router;
