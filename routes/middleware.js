const validarPag = ( req, res, next) => {
    const {id} = req.params
    const numberId = parseInt(id)

    if (isNaN(numberId) || numberId < 1) {
        return res.send('El id es invalido')
    }
    else {
        next()
    }
}

module.exports = {
    validarPag
}