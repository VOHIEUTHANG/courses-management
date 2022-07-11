import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';

// Emviroment Variabls
dotenv.config();
const port = process.env.PORT ?? 3000;

const app = express();
// Debug and automatically rerun on change code
// app.use(morgan("combined"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuation static files
app.use(express.static(path.join(__dirname, 'clients', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup template engine Handlebars
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'clients', 'views'));

routes(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
