import { openDb } from '../dbConfig.js'

export async function createTable() {
    openDb().then((db) => {
        db.exec('CREATE TABLE IF NOT EXISTS Ingredientes (id INTEGER PRIMARY KEY,'
            + 'Data_Registro DATETIME,'
            + 'Ingrediente_1 REAL,'
            + 'Ingrediente_2 REAL,'
            + 'Ingrediente_3 REAL,'
            + 'Ingrediente_4 REAL,'
            + 'Ingrediente_5 REAL,'
            + 'Ingrediente_6 REAL,'
            + 'Total REAL' + ');')
            .catch((err) => { console.log(err) })
    })
}

export async function getPeriod(dataStart, dataEnd) {
    let query = `SELECT SUM(Ingrediente_1) as Ingrediente_1, 
                        SUM(Ingrediente_2) as Ingrediente_2, 
                        SUM(Ingrediente_3) as Ingrediente_3, 
                        SUM(Ingrediente_4) as Ingrediente_4,
                        SUM(Ingrediente_5) as Ingrediente_5, 
                        SUM(Ingrediente_6) as Ingrediente_6, 
                        SUM(Total) as Total 
                        FROM Ingredientes WHERE Data_Registro BETWEEN '${dataStart}' AND '${dataEnd}'`
    return openDb().then((db) => {
        return db.all(query).then(res => res)
            .catch((err) => { console.log(err) })
    }).catch((err) => { console.log(err) })
}
