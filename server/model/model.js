import sqlite from "sqlite3";
const sqlite3 = sqlite.verbose();
// const db = new sqlite3.Database("./bloodCellsBD.db");
const db = new sqlite3.Database("../database/bloodCellsBD.db");
// const db = new sqlite3.Database("./database/bloodCellsDB.db");

export default class BloodCellModel {
  getBloodCellDescriptionByName(name, callback) {
    const query = `SELECT * FROM BloodCells WHERE name = ?`;
    db.all(query, [name], callback);
  }
  getBloodCellsDescriptionByHemopoiesis(name, callback) {
    const query = `SELECT bc.* 
          FROM BloodCells bc
          JOIN Hematopoiesis_BloodCells hbc ON bc.id = hbc.bloodCell_id
          JOIN Hematopoesis h ON h.id = hbc.hematopoiesis_id
          WHERE h.name = ?`;
    db.all(query, [name], callback);
  }
  getImagesByHemopoiesis(name, callback) {
    const query = `SELECT bci.*
    FROM BloodCellImages bci
    JOIN BloodCells bc ON bc.id = bci.bloodCell_id
    JOIN Hematopoiesis_BloodCells hbc ON hbc.bloodCell_id = bc.id
    JOIN Hematopoesis h ON h.id = hbc.hematopoiesis_id
    WHERE h.name = ?`;
    db.all(query, [name], callback);
  }

  getImagesByName(name, callback) {
    const query = `SELECT bci.*
    FROM BloodCellImages bci
    JOIN BloodCells bc ON bc.id = bci.bloodCell_id
    WHERE bc.name = ?`;
    db.all(query, [name], callback);
  }

  getAllBloodCellsNames(callback) {
    const query = `SELECT name FROM BloodCells`;
    db.all(query, callback);
  }
}
