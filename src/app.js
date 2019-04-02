//app.js
const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//Define Paths for express config
const publicDir = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')

//setup handlebars enjine and views location
app.set('view engine', 'hbs')
app.set('views',viewsPath)

//setup static directory to serve
app.use(express.static(publicDir))

app.get('/',(req,res)=>{
  res.render('index',{
    title:'Character Generator'
  })
})

app.get('*',(req,res)=>{
  res.send('404 - page not found!')
})



app.listen(port, ()=>{
  console.log('server started on port '+port)
})



