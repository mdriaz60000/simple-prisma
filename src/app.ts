import express, { Application, Request, Response } from "express";
import cors from "cors";
import { authRoutes } from "./app/module/auth/auth.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "The server is running",
  });
});



export default app;