class NewsController {
  // [get] news
  index(req, res, next) {
    res.render('news');
  }
  //   [get] news/:slug
  detail(req, res) {
    console.log(req.params.slug);
    res.render('detail-news');
  }
}

export default new NewsController();
