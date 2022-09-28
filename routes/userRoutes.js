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



// router.post("/create", (req, res) => res.send("Creacion de usuario."))

// router.post("/create/:id",  validarPag, (req, res) => res.send(`Creacion de libro ${req.params.id}.`))

// router.put("/update", (req, res) => res.send("Actualizacion de libros."))

// router.put("/update/:id", validarPag, (req, res) => res.send(`Actualizacion de libros ${req.params.id}.`))

// router.delete("/delete", (req, res) => res.send("Eliminacion de libros."))

// router.delete("/delete/:id", validarPag, (req, res) => res.send(`Eliminacion de libros ${req.params.id}.`))

module.exports = router