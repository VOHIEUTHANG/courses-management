import { getCourses } from '../models/Courses.js';

class SiteController {
  async index(req, res) {
    const courses = await getCourses();
    if (courses) {
      res.render('news', { courses });
    } else {
      next('Get Courses Failed !');
    }
    res.render('home');
  }
  search(req, res) {
    res.render('search');
  }
}

export default new SiteController();
