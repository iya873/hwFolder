const express = require('express')
const app = express()
const port = 3000
const pokemon = require('./pokemon')
const pokeData = require('./pokemon')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App')
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon: pokeData})
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})