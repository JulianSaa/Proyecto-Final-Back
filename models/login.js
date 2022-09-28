const {request} = require('../db/config')
const { checkPass } = require('../utils')


module.exports.login = async ( email, password ) => {

    // console.log(email, password
    const data = await request(`SELECT * FROM users WHERE email = '${email}'`)
    
    if(data.length) {
        if((password, data[0].password)) {
            return {    
                user:data[0],
                existe: true
            }
        }else{
            return 'Usuario o contraseña incorrecta'
        }
    }else {
        return 'Usuario no registrado'
    }
}

module.exports.signup = async (name, surname, email, pass) => {
    const data = await request (`INSERT INTO users (name, surname, email, password) VALUES ('${name}', '${surname}', '${email}', '${pass}')`)

    return {
        id : data.insertId,
        name,
        surname,
        email,
    }
}
