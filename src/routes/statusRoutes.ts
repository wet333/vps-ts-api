import express from "express";
import { getDbStatus, getStatus } from "../controllers/statusControllers";

const router = express.Router();

router.get("/api", getStatus);
router.get("/db", getDbStatus);

export default router;