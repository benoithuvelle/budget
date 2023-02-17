class Envelope
{
	constructor(name, amount)
	{
		this.name = name
		this.amount = amount
		this.spendings = {}
	}

	addSpending({ name, amount, uuid })
	{
		this.spendings[uuid] = { name, amount, uuid }
	}
}

module.exports = Envelope
