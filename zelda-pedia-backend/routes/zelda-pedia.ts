// Pulls data from the zelda-api
import { Router, Request, Response } from "express";

const router = Router();

router.get("/games", async (req: Request, res: Response) => {
    const response = await fetch("https://zelda.fanapis.com/api/games?limit=100");
    const data = await response.json();
    res.json(data);
});

export default router;