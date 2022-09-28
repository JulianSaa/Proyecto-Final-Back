const {request} = require('../db/config')

module.exports.allStock = async () => {
    const data = await request ('SELECT * FROM stock')

    return {
        stock: data
    }
}

module.exports.stockById = async () => {
    const data = await request (`SELECT * FROM stock WHERE id= ${id}`)

    return {
        book: data[0]
    }
}

module.exports.createStock = async ({name, amount}) => {
    const data = await request (`
        INSERT INTO stock (name, amount)
        VALUES('${name}', ${amount});` 
    )

    return {
        id: data.insertID,
        name
    }
}

module.exports.updateStock = async ({id, name, amount, available}) => {
    const data = await request (`
        UPDATE stock
        SET name='${name}',
            amount='${amount}',
            available='${available}',
        WHERE id = ${id}`
        )

    return {
        id,
        name,
        amount,
        available,
        updated: data.affectRows ? true : false
    }
}

module.exports.delateStock = async ({id}) => {
    const data = await request (`
        DELETE FROM stock
        WHERE id = ${id} `
        )

    return {
        id,
        deleted: data.affectRows ? true : false
    }
}
