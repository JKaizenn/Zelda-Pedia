import express, { Request, Response } from "express";
import cors from "cors";
import zeldaRouter from "./routes/zelda-pedia.js";

const app = express();
const port = 3000;

app.use(cors());
app.use("/api", zeldaRouter);

app.get('/', (req: Request, res: Response) => {
    res.send("Hello Wiki!");
});

app.listen(port, () => {
    console.log(`Zelda-Pedia Running on: ${port}`);
});