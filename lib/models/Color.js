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

  // SELECT
  static async find() {
    const { rows } = await pool.query(
      `
        SELECT * FROM color
      `
    );

    return rows.map((row) => new Color(row));
  }

  // findByID helper function
  static async findByID(id) {
    const { rows } = await pool.query(
      `
        SELECT * FROM color
        WHERE id=$1
      `,
      [id]
    );
    if (!rows[0]) throw new Error(`No song with id ${id}`);
    return new Color(rows[0]);
  }

  // UPDATE
  static async update(id, { colorCode, colorUrl }) {
    const { rows } = await pool.query(
      `
        UPDATE color
        SET color_code=$1,
            color_url=$2
        WHERE id=$3
        RETURNING *
      `,
      [colorCode, colorUrl, id]
    );

    return new Color(rows[0]);
  }
  // DELETE
  static async delete(id) {
    const { rows } = await pool.query(
      `
        DELETE FROM color 
        WHERE id=$1
        RETURNING *
      `,
      [id]
    );

    return new Color(rows[0]);
  }
};
