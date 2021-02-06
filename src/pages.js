const db = require('./database/db')
const save = require('./database/savePoint')
const { query } = require('express')

module.exports = {
    index(req, res) {
        return res.render('index.html')
    },

    pageCreatePoint(req, res) {
        return res.render('create-point.html')
    },

    async savePoint(req, res) {
        const point = req.body

        const error = await save.savePoint(point)

        if(error == true){
            return res.render('create-point.html', { erro: true })
        } else {
            return res.render('create-point.html', { saved: true })
        }
    },

    pageSearchResults(req, res) {
        const query = req.query

        if (query.search == '') {
            return res.render('search-results.html', { total: 0 })
        } else {
            // Busca dados no Banco
            // OBS: city LIKE %...% Qualquer coisa antes ou depois. Busca algo próximo do escrito e não exatamente igual.
            db.all(`SELECT * FROM places WHERE city LIKE '%${query.search}%'`, function (err, rows) {
                if (err) {
                    console.log(err)
                    return res.render('Erro')
                }

                const total = rows.length
                return res.render('search-results.html', { places: rows, total })
            })
        }
    }

}

