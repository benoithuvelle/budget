const express = require('express')
const apiRouter = express.Router()
const Budget = require('../classes/Budget.js')

const b = new Budget(1000, 'USD')

const checkDuplicate = (req, res, next) => {
	const { name, amount } = req.body
	if (b[name])
		return res.status(400).send('This envelope already exists.')
	next()
}

const checkBudget = (req, res, next) => {
	const { name, amount } = req.body
	if (b.balance - amount < 0)
		return res.status(400).send('No more money. You can not assign a new envelope.')
	next()
}

apiRouter.get('/envelopes', (req, res) => {
	res.send(b)
})

apiRouter.post('/envelopes', checkDuplicate, checkBudget, (req, res) => {
	b.add(req.body)
	res.send(b)
})


module.exports = apiRouter
