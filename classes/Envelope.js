const currencies = require('../constants/currencies.js')

class Envelope {
	constructor(budget, currency = undefined) {
		this.budget = budget
		this.currency = currency ?? currencies.USD
	}


}

module.exports = Envelope