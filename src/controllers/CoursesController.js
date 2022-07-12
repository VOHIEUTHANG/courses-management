import {
  getParicularCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from '../models/Courses.js';

class CourseController {
  //   [Get] detail/:id
  async detail(req, res, next) {
    const id = req.params.id;
    const course = await getParicularCourses(id);
    if (course.length > 0) {
      res.render('course-detail', { course: course[0] });
    } else {
      next('Get Course by ID not found!');
    }
  }

  async create(req, res) {
    res.render('create');
  }
  // [POST] /store
  async store(req, res, next) {
    const data = req.body;
    const { name, description, thumbnail } = data;
    const insertStatus = await createCourse(name.trim(), description.trim(), thumbnail.trim());
    if (insertStatus) {
      res.redirect(`/courses/detail/${insertStatus}`);
    } else {
      next('Update course infor failed !');
    }
  }
  // [Get] /edit/:id
  async edit(req, res) {
    const id = req.params.id;
    const course = await getParicularCourses(id);
    res.render('edit', { course: course[0] });
  }
  // [PUT] /update/:id
  async update(req, res, next) {
    const id = req.params.id;
    const { name, description, thumbnail } = req.body;
    const result = await updateCourse(name.trim(), description.trim(), thumbnail.trim(), id);
    if (result) {
      res.redirect('/me/courses');
    } else {
      next('Update course infor failed !');
    }
  }

  async delete(req, res, next) {
    const id = req.params.id;
    const deleteStatus = await deleteCourse(id);
    if (deleteStatus) {
      res.redirect('/me/courses');
    } else {
      next('Delete course successfully !');
    }
  }
}

export default new CourseController();
