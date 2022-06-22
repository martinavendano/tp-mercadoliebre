const express = require('express')
const path = require('path')
const app = express()
const port = 3031

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','index.html')))
app.listen(port,() => console.log(`Servidor abierto en http://localhost:${port}`))