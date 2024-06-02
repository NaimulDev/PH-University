import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyPaser from "body-parser";
import globalErrorHander from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());
app.use(bodyPaser.json());
// api/v1/students

// application routes
// app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Devs!");
});

// error handling middleware
app.use(globalErrorHander);

// Not Found
app.use(notFound);

export default app;
