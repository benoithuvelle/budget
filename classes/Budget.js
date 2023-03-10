const Envelope = require('./Envelope.js')

class Budget
{
	constructor(budget, currency = undefined)
	{
		this.budget = budget
		this.currency = currency
		this.spendings = {}
	}

	addEnvelope({ name, amount })
	{
		this[name] = new Envelope(name, amount)
	}

	addSpending(spending)
	{
		const { uuid, envelope } = spending
		this.spendings[uuid] = spending
		if (envelope)
			envelope.addSpending(spending)
	}

	get balance()
	{
		let spent = 0
		for (const property in this)
		{
			spent +=
				this[property] instanceof Envelope ? this[property].amount : 0
		}
		return this.budget - spent
	}

	set balance(balance)
	{
		this.balance = balance
	}
}

module.exports = Budget
