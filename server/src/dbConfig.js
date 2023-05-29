import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

import csv from 'fast-csv';
import fs from 'fs';

const stream = fs.createReadStream('src/Padaria_Bom_Dia.csv');

export async function openDb() {
  return open({
    filename: 'database.db',
    driver: sqlite3.Database })
}

export async function populateDb() {
  openDb().then((db) => {
    csv.parseStream(stream, { delimiter: ";" })
      .on('error', error => console.log(error))
      .on('end', (rowCount) => console.log(rowCount + " linhas"))
      .on('data', (row) => {
        db.run('INSERT INTO Ingredientes'
          + '(Data_Registro, Ingrediente_1, Ingrediente_2, Ingrediente_3, Ingrediente_4, Ingrediente_5, Ingrediente_6, Total)'
          + 'VALUES (?, ?, ?, ?, ?, ?, ?, ?)', row) })
    return db })
    .catch((err) => { console.log(err) });
}

