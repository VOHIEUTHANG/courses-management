import { getAllCourses, countDeletedCourse } from '../models/Courses.js';

class MeController {
  // [GET] /me/courses
  async storedCourses(req, res) {
    const deletedCoursesQuantity = await countDeletedCourse();
    const courses = await getAllCourses();
    if (courses) {
      res.render('my-courses', { courses, deletedCoursesQuantity });
    } else {
      next('Get Courses Failed !');
    }
  }
}

export default new MeController();
