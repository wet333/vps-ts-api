import express from "express";
import { getUserRepositoryList } from "../controllers/github/githubControllers";

const router = express.Router();

router.get("/my-repositories", getUserRepositoryList);

export default router;