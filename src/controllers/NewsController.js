import pool from '../config/ConnectMySQL.js';

class NewsController {
  async index(req, res) {
    // [get] news
    const [row, feild] = await pool.execute('select * from user');
    console.log(row);
    res.render('news');
  }
  //   [get] news/:slug
  detail(req, res) {
    console.log(req.params.slug);
    res.render('detail-news');
  }
}

export default new NewsController();
