import express from "express";
// Routes imports
import statusRouter from "./statusRoutes";
import githubRouter from "./githubRoutes";

const mainRouter = express.Router();

mainRouter.use("/status", statusRouter);
mainRouter.use("/github", githubRouter);

export default mainRouter;