const {allStock, stockById ,delateStock } = require('../models/stock')

module.exports.allStockController = async (req, res) =>{
    try {
        const users = await allStock()
        return req.status(200).send(users)

    }catch(err){
        console.log(err)
        return res.send('Se produjo un error')
    }
}


module.exports.stockByIdController = async (req, res) =>{
    const {id} = req.params

    try { 
        const users = await stockById(id)
        return req.status(200).send(users)

    }catch(err){
        console.log(err)
        return res.send('Se produjo un error')
    }
}

module.exports.delateStockController = async (req, res) =>{
    const {id} = req.params

    try {
        const users = await delateStock(id)
        return req.status(200).send(users)

    }catch(err){
        console.log(err)
        return res.send('Se produjo un error')
    }
}
