const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 5000
const apiRouter = require('./server/routes.js')

app.get('/', (req, res) => {
	res.send('Coucou petite perruche!')
})

app.use(bodyParser.json())

app.use('/api', apiRouter)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
