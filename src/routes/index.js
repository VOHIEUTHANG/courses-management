import newsRouter from "./news.route.js";
import siteRouter from "./site.route.js";

export default function routes(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}
