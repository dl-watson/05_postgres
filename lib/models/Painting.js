const pool = require("../utils/pool");

module.exports = class Painting {
  id;
  paintingYear;
  paintingClassification;

  constructor(row) {
    (this.id = row.id),
      (this.paintingYear = row.painting_year),
      (this.paintingClassification = row.painting_classification);
  }

  // CRUD methods
  // INSERT
  static async insert({ paintingYear, paintingClassification }) {
    const { rows } = await pool.query(
      `
        INSERT INTO painting (painting_year, painting_classification)
        VALUES ($1, $2)
        RETURNING *
    `,
      [paintingYear, paintingClassification]
    );

    return new Painting(rows[0]);
  }

  // SELECT
  static async find() {
    const { rows } = await pool.query(
      `
        SELECT * FROM painting
      `
    );

    return rows.map((row) => new Painting(row));
  }

  // findByID helper function
  static async findByID(id) {
    const { rows } = await pool.query(
      `
        SELECT * FROM painting
        WHERE id=$1
      `,
      [id]
    );
    if (!rows[0]) throw new Error(`No painting with id ${id}`);
    return new Painting(rows[0]);
  }

  // UPDATE
  static async update(id, { paintingYear, paintingClassification }) {
    const { rows } = await pool.query(
      `
        UPDATE painting
        SET painting_year=$1,
            painting_classification=$2
        WHERE id=$3
        RETURNING *
      `,
      [paintingYear, paintingClassification, id]
    );

    return new Painting(rows[0]);
  }
  // DELETE
  static async delete(id) {
    const { rows } = await pool.query(
      `
        DELETE FROM painting 
        WHERE id=$1
        RETURNING *
      `,
      [id]
    );

    return new Painting(rows[0]);
  }
};
