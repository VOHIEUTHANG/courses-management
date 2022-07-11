import pool from '../config/ConnectMySQL.js';

const getAllCourses = async () => {
  try {
    const [row, feild] = await pool.execute('select * from courses');
    return row;
  } catch (error) {
    console.log(error.message);
    return 0;
  }
};

const getDetailCourses = async id => {
  try {
    const [row, feild] = await pool.execute('select * from courses where id = ? limit 1', [id]);
    return row;
  } catch (error) {
    console.log(error.message);
    return 0;
  }
};

export { getAllCourses, getDetailCourses };
