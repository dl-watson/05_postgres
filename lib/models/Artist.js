const pool = require("../utils/pool");

module.exports = class Artist {
  id;
  artistName;
  artistContact;

  constructor(row) {
    (this.id = row.id),
      (this.artistName = row.artist_name),
      (this.artistContact = row.artist_contact);
  }

  // CRUD methods
  // INSERT
  static async insert({ artistName, artistContact }) {
    const { rows } = await pool.query(
      `
        INSERT INTO artist (artist_name, artist_contact)
        VALUES ($1, $2)
        RETURNING *
    `,
      [artistName, artistContact]
    );

    return new Artist(rows[0]);
  }

  // SELECT
  static async find() {
    const { rows } = await pool.query(
      `
        SELECT * FROM artist
      `
    );

    return rows.map((row) => new Artist(row));
  }

  // findByID helper function
  static async findByID(id) {
    const { rows } = await pool.query(
      `
        SELECT * FROM artist
        WHERE id=$1
      `,
      [id]
    );
    if (!rows[0]) throw new Error(`No artist with id ${id}`);
    return new Artist(rows[0]);
  }

  // UPDATE
  static async update(id, { artistName, artistContact }) {
    const { rows } = await pool.query(
      `
        UPDATE artist
        SET artist_name=$1,
            artist_contact=$2
        WHERE id=$3
        RETURNING *
      `,
      [artistName, artistContact, id]
    );

    return new Artist(rows[0]);
  }
  // DELETE
  static async delete(id) {
    const { rows } = await pool.query(
      `
        DELETE FROM artist 
        WHERE id=$1
        RETURNING *
      `,
      [id]
    );

    return new Artist(rows[0]);
  }
};
