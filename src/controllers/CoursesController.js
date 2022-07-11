import { getDetailCourses } from '../models/Courses.js';
class CourseController {
  //   [get] news/:slug
  async detail(req, res) {
    const id = req.params.id;
    const course = await getDetailCourses(id);
    console.log(course);
    res.render('course-detail', { course: course[0] });
  }
}

export default new CourseController();
