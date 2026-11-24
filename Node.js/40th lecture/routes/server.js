// npm i npm express ejs nodemon
// npm init
// "start": "node server.js", 
 // "dev" : "nodemon server.js"
// npm run dev / npm start

const express = require('express')
const app = express()
const path = require('path')
const PORT = 3500

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/user', (req, res)=> {
    res.send('hi all')
})

app.get('/user/:id/:username', (req, res)=> {
    // res.send('hi user')

    // let userId = req.params.id
    // let userName = req.params.username

    

    // res.send(`${userId} ${userName}`)
    // res.render('index', {
        
    //     id : userId,
    //      user_info : userName   })


    const {id, username} = req.params
    
        res.render('index', {id, username})

})


app.listen(PORT, ()=> console.log(`listening on ${PORT}`))

