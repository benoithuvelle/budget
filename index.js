const express = require('express')
const app = express()
const PORT = 3000
const Envelope = require('./classes/Envelope.js')

const budget = new Envelope(10000)

app.get('/', (req, res) => {
	res.send('Coucou petite perruche!')
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})