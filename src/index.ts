import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// Configuration the .env file
dotenv.config();

// Create the express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    data: {
      message: "Goodbye, World!",
    },
  });
});

app.get("/hello/:name?", (req: Request, res: Response) => {
  const { name } = req.params;
  if (!name) {
    res.status(200).json({
      data: {
        message: "Hola, Anónimo!",
      },
    });
  }
  res.status(200).json({
    data: {
      message: `Hola, ${name}!`,
    },
  });
});

// Execute APP and listen the port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
