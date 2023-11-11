import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import mainRouter from "./routes/index"

const app = express();
const PORT = 3000;

app.use(cors({
    origin: ["https://awet.online", "http://localhost:9000"]
}));
app.use(bodyParser.json());
app.use("/api", mainRouter);

app.listen(PORT, () => {
    console.log("Server listening in port: " + PORT);
})