import { getAllCourses } from '../models/Courses.js';

class MeController {
  // [GET] /me/courses
  async index(req, res) {
    const courses = await getAllCourses();
    if (courses) {
      res.render('my-courses', { courses });
    } else {
      next('Get Courses Failed !');
    }
  }
}

export default new MeController();
