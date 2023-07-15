// config inicial
const express = require('express')
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
app.listen(3000)