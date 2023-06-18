import express from "express";
import { checkAuth, handleValidationErrors } from "../../utils/index.js";
import * as UserController from "../controllers/UserController.js";

const router = express.Router({ mergeParams: true });

router.get("/users/:id", handleValidationErrors, UserController.getUserById);
router.patch(
  "/users/:id",
  checkAuth,
  handleValidationErrors,
  UserController.updateUser
);
router.get("/users", handleValidationErrors, UserController.getAllUsers);
router.delete(
  "/users/:id",
  handleValidationErrors,
  UserController.deleteUserAndPosts
);

export default router;
