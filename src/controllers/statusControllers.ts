import { Request, Response } from "express";
import { db } from "../db";

export const getStatus = (req: Request, res: Response): void => {
    res.json({
        status: "Server status: up and running!"
    });
};

export const getDbStatus = (req: Request, res: Response): void => {
    db.get("SELECT * FROM users", (err, row) => {
        if (err) {
            res.status(500).json({
                status: "Database not working",
                error: err.message,
            });
            return;
        }
        res.json(row);
    });
};