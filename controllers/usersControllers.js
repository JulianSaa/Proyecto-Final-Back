const {allusers, userById, delateUser} = require('../models/users')

module.exports.allUsersController = async (req, res) =>{
    try {
        const users = await allusers()
        return req.status(200).send(users)

    }catch(err){
        console.log(err)
        return res.send('Se produjo un error')
    }
}


module.exports.userByIdController = async (req, res) =>{
    const {id} = req.params

    try {
        const users = await userById(id)
        return req.status(200).send(users)

    }catch(err){
        console.log(err)
        return res.send('Se produjo un error')
    }
}

module.exports.deleteUserController = async (req, res) =>{
    const {id} = req.params

    try {
        const users = await delateUser(id)
        return req.status(200).send(users)

    }catch(err){
        console.log(err)
        return res.send('Se produjo un error')
    }
}
