// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// forma de ler JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rota inicial / endpoint
app.get('/', (req, res) => {
    // mostrar req

    res.json({ 
        message: 'oi express!',
        outraMensagem: 'olá'
    })
})

// entregar uma porta
const DB_USER = 'raphaelkauanoficial'
const DB_PASSWORD = encodeURIComponent('4lVQD6hxQwQhPas6')

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.g6y8wqv.mongodb.net/bancoapi?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
})
.catch((err) => console.log(err))

app.listen(3000)