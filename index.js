import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;

app.get("/home", (req, res) => {
  const a = 1;
  const b = 2;
  const c = a + b;
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
