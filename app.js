const express   = require('express')
const app       = express()
const router    = require('./routes')
const path      = require('path')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/public',express.static(path.join(__dirname, 'uploads')))
app.use(router)
app.use((req,res)=>{
    res.status(404)
    res.send(` <h1>404</h1> <br/> this url ${req.originalUrl} Not Found`)
})
app.listen(3000, ()=> console.log('http://localhost:3000/'))