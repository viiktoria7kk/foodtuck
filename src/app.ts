import express, { Application, Request, Response, NextFunction } from "express";
import "dotenv/config";

const app: Application = express();

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: "init project" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
