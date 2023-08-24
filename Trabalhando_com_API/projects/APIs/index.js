const express = require ('express')

const app = express()

app.listen('3000')

//let author = "Clecio"

//middleware
app.use(express.json())

// ROTA POST
//app.route('/').post( (req, res) => console.log(req.body))
//app.route('/').post( (req, res) => res.send(req.body))

// ROTA GET
//app.route('/').get( (req, res) => res.send(author) )

// ROTA PUT - editar
// app.route('/').put( (req, res) => {
//     author = req.body.author
//     res.send(author)
// })

// ROTA DELETE
// app.route('/:identificador').delete( (req, res) => {
//     res.send(req.params.identificador)
// })



app.route('/').post( (req, res) => {
    const {nome, cidade} = req.body
    res.send(`Meu nome é ${nome} e minha cidade é ${cidade}`)
})