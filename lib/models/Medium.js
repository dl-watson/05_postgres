const pool = require("../utils/pool");

module.exports = class Medium {
  id;
  mediumType;
  difficulty;

  constructor(row) {
    (this.id = row.id),
      (this.mediumType = row.medium_type),
      (this.difficulty = row.difficulty);
  }

  // CRUD methods
  // INSERT
  static async insert({ mediumType, difficulty }) {
    const { rows } = await pool.query(
      `
        INSERT INTO medium (medium_type, difficulty)
        VALUES ($1, $2)
        RETURNING *
    `,
      [mediumType, difficulty]
    );

    return new Medium(rows[0]);
  }

  // SELECT
  static async find() {
    const { rows } = await pool.query(
      `
        SELECT * FROM medium
      `
    );

    return rows.map((row) => new Medium(row));
  }

  // findByID helper function
  static async findByID(id) {
    const { rows } = await pool.query(
      `
        SELECT * FROM medium
        WHERE id=$1
      `,
      [id]
    );
    if (!rows[0]) throw new Error(`No medium with id ${id}`);
    return new Medium(rows[0]);
  }

  // UPDATE
  static async update(id, { mediumType, difficulty }) {
    const { rows } = await pool.query(
      `
        UPDATE medium
        SET medium_type=$1,
            difficulty=$2
        WHERE id=$3
        RETURNING *
      `,
      [mediumType, difficulty, id]
    );

    return new Medium(rows[0]);
  }
  // DELETE
  static async delete(id) {
    const { rows } = await pool.query(
      `
        DELETE FROM medium 
        WHERE id=$1
        RETURNING *
      `,
      [id]
    );

    return new Medium(rows[0]);
  }
};
