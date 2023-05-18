import sqlite from "sqlite3";
const sqlite3 = sqlite.verbose();
const db = new sqlite3.Database("D:/bloodCellsBD.db");

export default class BloodCellModel {
  getBloodCellByName(name, callback) {
    const query = `SELECT * FROM BloodCells WHERE name = ?`;
    db.all(query, [name], callback);
  }
  getBloodCellsByHemopoiesis(name, callback) {
    const query = `SELECT bc.*
          FROM BloodCells bc
          JOIN Hematopoiesis_BloodCells hbc ON bc.id = hbc.bloodCell_id
          JOIN Hematopoesis h ON h.id = hbc.hematopoiesis_id
          WHERE h.name = ?`;
    db.all(query, [name], callback);
  }
}
