import express from "express";
import { checkAuth, handleValidationErrors } from "../../utils/index.js";
import * as CommentController from "../controllers/CommentController.js";

const router = express.Router({ mergeParams: true });

router.get(
  "/comments",
  handleValidationErrors,
  CommentController.getAllComments
);
router.get(
  "/comments/:id",
  handleValidationErrors,
  CommentController.getCommentById
);
router.post(
  "/comments",
  checkAuth,
  handleValidationErrors,
  CommentController.createComment
);
router.delete(
  "/comments/:id",
  checkAuth,
  handleValidationErrors,
  CommentController.deleteComment
);

export default router;
