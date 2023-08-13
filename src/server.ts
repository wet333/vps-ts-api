import express from "express";
import bodyParser from "body-parser";

import mainRouter from "./routes/index"

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/api", mainRouter);

app.listen(PORT, () => {
    console.log("Server listening in port: " + PORT);
})