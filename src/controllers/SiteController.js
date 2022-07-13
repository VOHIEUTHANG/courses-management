import { getAllCourses } from '../models/Courses.js';

class SiteController {
  async index(req, res) {
    const courses = await getAllCourses();
    if (courses) {
      res.render('home', { courses });
    } else {
      next('Get Courses Failed !');
    }
  }

  search(req, res) {
    res.render('search');
  }
}

export default new SiteController();
