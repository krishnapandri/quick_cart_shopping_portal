const { poolPromise } = require('../db/dbconfig');

const getUsers = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM [dbo].[UserRegistration]'); // Replace with your table name
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Server Error');
  }
};

module.exports = { getUsers };