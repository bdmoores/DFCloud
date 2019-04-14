//app.js
const path = require('path')
const express = require('express')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000



//Define Paths for express config
const publicDir = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')

//define paths for routers
const userRouter = require('./routers/user')


app.use(express.json())
app.use(userRouter)



const router = new express.Router()
//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views',viewsPath)

//setup static directory to serve
app.use(express.static(publicDir))

app.get('/',(req,res)=>{
  res.render('index',{
    title:'Character Generator'
  })
})

app.listen(port, ()=>{
  console.log('Server started on port '+port)
})

app.get('*',(req,res)=>{
  res.send('404 - page not found!')
})



