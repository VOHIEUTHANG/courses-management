import siteRouter from './site.route.js';
import coursesRouter from './courses.route.js';

export default function routes(app) {
  app.use('/', siteRouter);
  app.use('/courses', coursesRouter);
}
