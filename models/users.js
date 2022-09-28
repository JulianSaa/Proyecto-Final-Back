const {request} = require('../db/config')

module.exports.allUsers = async () => {
    const data = await request ('SELECT * FROM users')

    return {
        users: data
    }
}

module.exports.userById = async () => {
    const data = await request (`SELECT * FROM users WHERE id= ${id}`)

    return {
        book: data[0]
    }
}

module.exports.updateUser = async ({id, name, email, status}) => {
    const data = await request (`
        UPDATE users
        SET name='${name}',
            email='${email}',
            status='${status}',
        WHERE id = ${id}`
        )

    return {
        id,
        name,
        updated: data.affectRows ? true : false
    }
}

module.exports.delateUser = async ({id}) => {
    const data = await request (`
        DELETE FROM users
        WHERE id = ${id} `
        )

    return {
        id,
        deleted: data.affectRows ? true : false
    }
}

