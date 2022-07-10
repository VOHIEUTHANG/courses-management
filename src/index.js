import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";

// Emviroment Variabls
dotenv.config();
const port = process.env.PORT ?? 3000;

const app = express();

// Debug and automatically rerun on change code
app.use(morgan("combined"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuation static files
app.use(express.static(path.join(__dirname, "/clients/public")));

// Setup template engine Handlebars
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "/clients/views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
