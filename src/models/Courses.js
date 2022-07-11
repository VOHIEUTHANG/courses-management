import pool from '../config/ConnectMySQL.js';

export const getCourses = async () => {
  try {
    const [row, feild] = await pool.execute('select * from courses');
    return row;
  } catch (error) {
    console.log(error.message);
    return 0;
  }
};
