import {
  getParicularCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  getDeletedCourses,
  restoreCourse,
  permanentlyDelete,
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

  async trashCourse(req, res) {
    const courses = await getDeletedCourses();
    if (courses === 0) {
      next('Get deleted courses failed !');
    } else {
      res.render('course-trash', { courses });
    }
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
  // [PATCH] /delete/:id
  async delete(req, res, next) {
    const id = req.params.id;
    const deleteStatus = await deleteCourse(id);
    if (deleteStatus) {
      res.redirect('/me/courses');
    } else {
      next('Delete course failed !');
    }
  }
  // [PATCH] /restore/:id
  async restore(req, res, next) {
    const id = req.params.id;
    const deleteStatus = await restoreCourse(id);
    if (deleteStatus) {
      res.redirect('/courses/recycle-bin');
    } else {
      next('Restore course failed !');
    }
  }
  //[DELETE] /force-delete/:id
  async forceDelete(req, res, next) {
    const courseId = req.params.id;
    const permenetlyDeleteStatus = await permanentlyDelete(courseId);
    if (permenetlyDeleteStatus) {
      res.redirect('/courses/recycle-bin');
    } else {
      next('Restore course failed !');
    }
  }
}

export default new CourseController();
