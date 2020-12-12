const pool = require("../utils/pool");

module.exports = class Canvas {
  id;
  canvasSize;
  canvasQuantity;

  constructor(row) {
    (this.id = row.id),
      (this.canvasSize = row.canvas_size),
      (this.canvasQuantity = row.canvas_quantity);
  }

  // CRUD methods
  // INSERT
  static async insert({ canvasSize, canvasQuantity }) {
    const { rows } = await pool.query(
      `
        INSERT INTO canvas (canvas_size, canvas_quantity)
        VALUES ($1, $2)
        RETURNING *
    `,
      [canvasSize, canvasQuantity]
    );

    return new Canvas(rows[0]);
  }

  // SELECT
  static async find() {
    const { rows } = await pool.query(
      `
        SELECT * FROM canvas
      `
    );

    return rows.map((row) => new Canvas(row));
  }

  // findByID helper function
  static async findByID(id) {
    const { rows } = await pool.query(
      `
        SELECT * FROM canvas
        WHERE id=$1
      `,
      [id]
    );
    if (!rows[0]) throw new Error(`No canvas with id ${id}`);
    return new Canvas(rows[0]);
  }

  // UPDATE
  static async update(id, { canvasSize, canvasQuantity }) {
    const { rows } = await pool.query(
      `
        UPDATE canvas
        SET canvas_size=$1,
            canvas_quantity=$2
        WHERE id=$3
        RETURNING *
      `,
      [canvasSize, canvasQuantity, id]
    );

    return new Canvas(rows[0]);
  }
  // DELETE
  static async delete(id) {
    const { rows } = await pool.query(
      `
        DELETE FROM canvas 
        WHERE id=$1
        RETURNING *
      `,
      [id]
    );

    return new Canvas(rows[0]);
  }
};
