import express from "express";
// Routes imports
import statusRouter from "./statusRoutes";

const mainRouter = express.Router();

mainRouter.use("/status", statusRouter);

export default mainRouter;