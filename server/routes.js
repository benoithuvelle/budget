const express = require('express')
const apiRouter = express.Router()
const Budget = require('../classes/Budget.js')
const Spending = require('../classes/Spending.js')

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
		return res
			.status(400)
			.send('No more money. You can not assign a new envelope.')
	next()
}

apiRouter.param('name', (req, res, next, name) => {
	req.name = name
	next()
})

apiRouter.get('/envelopes', (req, res) => {
	res.send(b)
})

apiRouter.post('/envelopes', checkDuplicate, checkBudget, (req, res) => {
	try
	{
		b.addEnvelope(req.body)
		res.send(b)
	}
	catch (err)
	{
		res.sendStatus(500)
	}
})

apiRouter.get('/envelopes/:name', (req, res) => {
	const { name } = req
	if (b[name])
		res.send(b[name])
	else
		res.sendStatus(404)
})

apiRouter.delete('/envelopes/:name', (req, res) => {
	const { name } = req
	if (b[name])
	{
		delete b[name]
		res.send(b)
	}
	else
		res.sendStatus(404)
})

apiRouter.get('/spendings', (req, res) => {
	res.send(b.spendings)
})

apiRouter.post('/spendings', (req, res) => {
	const { envelopeName, name, amount } = req.body
	const s = new Spending({
		budget: b,
		envelopeName,
		name,
		amount,
	})
	res.send(s)
})

module.exports = apiRouter
