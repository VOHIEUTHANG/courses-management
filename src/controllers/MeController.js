import { getAllCourses, countDeletedCourse, getAllCourseAndSort } from '../models/Courses.js';
class MeController {
  // [GET] /me/courses
  async storedCourses(req, res, next) {
    const deletedCoursesQuantity = await countDeletedCourse();
    let courses = [];
    if (req.query.hasOwnProperty('_sort')) {
      console.log(res.locals._sort);
      courses = await getAllCourseAndSort(res.locals._sort.column, res.locals._sort.type);
    } else {
      courses = await getAllCourses();
    }
    if (courses) {
      res.render('my-courses', { courses, deletedCoursesQuantity });
    } else {
      next('Get Courses Failed !');
    }
  }
}

export default new MeController();
