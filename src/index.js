import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

// Emviroment Variabls
dotenv.config();
const port = process.env.PORT ?? 3000;

const app = express();

app.use(methodOverride('_method'));
// Debug and automatically rerun on change code
// app.use(morgan("combined"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuation static files
app.use(express.static(path.join(__dirname, 'clients', 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup template engine Handlebars
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'clients', 'views'));

routes(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
