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
  getImagesByHemopoiesis(name, callback) {
    const query = `SELECT bci.*
    FROM BloodCellImages bci
    JOIN BloodCells bc ON bc.id = bci.bloodCell_id
    JOIN Hematopoiesis_BloodCells hbc ON hbc.bloodCell_id = bc.id
    JOIN Hematopoesis h ON h.id = hbc.hematopoiesis_id
    WHERE h.name = ?`;
    db.all(query, [name], callback);
  }
  getAllBloodCellsNames(callback) {
    const query = `SELECT name FROM BloodCells`;
    db.all(query, callback);
  }
}

//Получает фотки по гемопоэзу
// SELECT bci.*
//           FROM BloodCellImages bci
// 		        JOIN Hematopoesis h ON h.id = bci.bloodCell_id
//           JOIN Hematopoiesis_BloodCells hbc ON h.id = hbc.bloodCell_id
//           WHERE h.name= 'granulopoiesis';
// SELECT bc.image
//     FROM BloodCellImages bc
//     JOIN BloodCells b ON b.id = bc.bloodCell_id
//     WHERE b.name = 'erythropoiesis';

// getImagesByHemopoiesis(name, callback) {
//   const query = `SELECT bci.*
//   FROM BloodCellImages bci
//   JOIN BloodCells bc ON bc.id = bci.bloodCell_id
//   JOIN Hematopoiesis_BloodCells hbc ON hbc.bloodCell_id = bc.id
//   JOIN Hematopoesis h ON h.id = hbc.hematopoiesis_id
//   WHERE h.name = ?`;
//   db.all(query, [name], callback);
// }
