const express = require('express');
const router = express.Router();
const { allUsersController } = require('../controllers/usersControllers');
const {validarPag} = require('./middleware');


router.use((req, res, next) => {
    const {host} = req.headers

    res.host = host

    next()
})

router.get("/", async (req, res) => {
    try{
        const users = await allUsersController()
        return res.send(users)

    }catch(err){
        return res.send('Se produjo un error')
    }
})


module.exports = router