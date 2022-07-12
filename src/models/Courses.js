import pool from '../config/ConnectMySQL.js';

const getAllCourses = async () => {
  try {
    const [row, feild] = await pool.execute('select * from courses where deleted = 0');
    return row;
  } catch (error) {
    console.log(error.message);
    return 0;
  }
};

const getDeletedCourses = async () => {
  try {
    const [row] = await pool.execute('select * from courses where deleted = 1');
    return row;
  } catch (error) {
    console.log(error.message);
    return 0;
  }
};

const getParicularCourses = async id => {
  try {
    const [row, feild] = await pool.execute('select * from courses where id = ? limit 1', [id]);
    return row;
  } catch (error) {
    console.log(error.message);
    return 0;
  }
};

const createCourse = async (...courseInfo) => {
  try {
    const [{ insertId }] = await pool.execute(
      'insert into courses (name,description,thumbnail) values (?,?,?)',
      courseInfo,
    );
    console.log('🚀 ~ file: Courses.js ~ line 26 ~ createCourse ~ insertId', insertId);
    return insertId;
  } catch (error) {
    console.log(error.message);
    return 0;
  }
};

const updateCourse = async (...courseInfo) => {
  try {
    const [{ affectedRows }] = await pool.execute(
      'UPDATE courses SET name = ?, description = ?, thumbnail = ? where id = ?',
      courseInfo,
    );
    if (affectedRows > 0) {
      return 1;
    }
  } catch (error) {
    console.log(error.message);
    return 0;
  }
};

const deleteCourse = async id => {
  try {
    const [{ affectedRows }] = await pool.execute('UPDATE courses SET deleted = 1 WHERE id = ?', [
      id,
    ]);
    if (affectedRows > 0) {
      return 1;
    }
  } catch (error) {
    console.log('🚀 ~ file: Courses.js ~ line 71 ~ error', error);
    return 0;
  }
};

const restoreCourse = async id => {
  try {
    const [{ affectedRows }] = await pool.execute('UPDATE courses SET deleted = 0 WHERE id = ?', [
      id,
    ]);
    if (affectedRows > 0) {
      return 1;
    }
  } catch (error) {
    console.log('🚀 ~ file: Courses.js ~ line 71 ~ error', error);
    return 0;
  }
};

const permanentlyDelete = async id => {
  try {
    const [{ affectedRows }] = await pool.execute('DELETE FROM courses WHERE id = ?', [id]);
    if (affectedRows > 0) {
      return 1;
    }
  } catch (error) {
    console.log('🚀 ~ file: Courses.js ~ line 59 ~ error', error);
    return 0;
  }
};

export {
  getAllCourses,
  getParicularCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  getDeletedCourses,
  restoreCourse,
};
