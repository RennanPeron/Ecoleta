const db =  require('./db')

function savePoint(point) {
    const query = `
            INSERT INTO places (
                image,
                name,
                adress,
                adress2,
                state,
                city,
                items
            ) VALUES (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?
            );
        `

        const values = [
            point.image,
            point.name,
            point.adress,
            point.adress2,
            point.state,
            point.city,
            point.items,
        ]

        db.run(query, values, function (err) {
            if (err) {
                console.log('Erro: ' + err)
                return true
            }
            console.log('Cadastrado com sucesso')

            return false
        })
}