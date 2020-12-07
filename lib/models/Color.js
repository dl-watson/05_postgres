const pool = require("../utils/pool");

module.exports = class Color {
  id;
  colorCode;
  colorUrl;

  constructor(row) {
    (this.id = row.id),
      (this.colorCode = row.color_code),
      (this.colorUrl = row.color_url);
  }

  // CRUD methods
  // INSERT
  static async insert({ colorCode, colorUrl }) {
    const { rows } = await pool.query(
      `
        INSERT INTO color (color_code, color_url)
        VALUES ($1, $2)
        RETURNING *
    `,
      [colorCode, colorUrl]
    );

    return new Color(rows[0]);
  }
  // findByID helper function

  // SELECT

  // UPDATE

  // DELETE
};
