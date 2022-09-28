const {request} = require ('./config')

request("SELECT * FROM Usuarios")
.then(data => console.log (data))
.catch(err => console.log (err))