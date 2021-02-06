const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// db.serialize(() => {
//     // Cria tabela se não existir
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             adress TEXT,
//             adress2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

    // INSERIR

    // const query = `
    //         INSERT INTO places (
    //             image,
    //             name,
    //             adress,
    //             adress2,
    //             state,
    //             city,
    //             items
    //         ) VALUES (
    //             ?,
    //             ?,
    //             ?,
    //             ?,
    //             ?,
    //             ?,
    //             ?
    //         );
    //     `

    // const values = [
    //     "https://images.unsplash.com/photo-1525695230005-efd074980869?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    //     "Colectoria",
    //     "Guilherme Gembala",
    //     "Nº 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão, Pilhas e Baterias"
    // ]
    
    // db.run(query, values, function (err) {
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log('Cadastrado com sucesso')
    //     console.log(this)
    // })

    // DELETAR
    // db.run(`DELETE FROM places WHERE id = ?`, [8], function(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log('Deletado com sucesso')
    // })

    // CONSULTA
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Aqui estao os registros: ")
    //     console.log(rows)
    // })

// })