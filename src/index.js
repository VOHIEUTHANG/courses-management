import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import { sortMiddleware } from './middleware/SortMiddleware.js';
import cors from 'cors';
import { info } from 'console';

// Emviroment Variabls
dotenv.config();
const port = process.env.PORT ?? 3000;

const app = express();

app.use(methodOverride('_method'));
// Debug and automatically rerun on change code
// app.use(morgan("combined"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
// Configuation static files
app.use(express.static(path.join(__dirname, 'clients', 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(sortMiddleware);

// Setup template engine Handlebars

app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default';

        const iconClasses = {
          default: 'fa-solid fa-sort',
          desc: 'fa-solid fa-arrow-down-wide-short',
          asc: 'fa-solid fa-arrow-down-short-wide',
        };
        const sortTypes = {
          default: 'desc',
          desc: 'asc',
          asc: 'desc',
        };

        const icon = iconClasses[sortType];
        const type = sortTypes[sortType];
        return `
        <a href="?_sort&column=${field}&type=${type}" style="padding: 4px;cursor:pointer">
        <i class="${icon} text-primary"></i>
        </a>
        `;
      },
    },
  }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'clients', 'views'));

routes(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
