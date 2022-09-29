const { login, signup } = require("../models/login");
const { encrypt } = require("../utils");


module.exports.loginController = async (req, res) =>{
    const {email, password} = req.body;
    console.log(email, password)
 
    try {
        const data = await login(email, password)
        return res.status(200).send(data)
    }catch(err){
        console.log(err)
        return res.send('Se produjo un error al registrarse')
    }
}

module.exports.singupController = async (req, res) => {
    const {name, surname, email, password} = req.body;
    const pass = encrypt(password)

    try {
        const users = await signup(name, surname, email, pass)
        return res.status(201).send(users)

    }catch(err){
        console.log(err)
        return res.send('Se produjo un error al crear el usuario')
    }
}