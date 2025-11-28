import express, { Request, Response } from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from the API!" });
});

app.listen(port, () => {
  console.log(`⚡️ [server]: API is running at http://localhost:${port}`);
});
