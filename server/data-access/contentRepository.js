const pool = require("../db");

const getAllContentSQL = `SELECT * FROM content;`;

module.exports = {
  getAllContent: async () => {
    try {
      const { rows } = await pool.query(getAllContentSQL);
      return rows;
    } catch (e) {
      throw new Error(`Database query failed: ${e.message}`, e.code);
    }
  },
};
