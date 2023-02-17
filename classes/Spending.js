const { v4: uuid } = require('uuid')

class Spending
{
	constructor({ budget, envelopeName, name, amount })
	{
		this.budget = budget
		this.name = name
		this.amount = amount
		this.envelope = this.budget[envelopeName] ?? undefined
		this.uuid = uuid()
		this.assignToBudget()
	}

	assignToBudget(envelope)
	{
		this.budget.addSpending({
			name: this.name,
			amount: this.amount,
			envelope: this.envelope,
			uuid: this.uuid,
		})
	}
}

module.exports = Spending
