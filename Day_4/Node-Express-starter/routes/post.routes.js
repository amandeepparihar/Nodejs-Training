import express from "express";
const router = express.Router();
import {
  createNewPost,
  getAllPosts,
  getPostById,
} from "../controllers/postControllers.js";

router.get("/", getAllPosts);
router.post("/", createNewPost);
router.get("/:id", getPostById);

export default router;
