import React from 'react'
import { StyledMenu } from './StyledMenu.jsx'

function Menu({ budget })
{
	return (
		<StyledMenu>
			<span>Budget: ${budget.budget}</span>
			<button
				onClick={() => {
					const name = prompt('What name ?')
					const value = prompt('What value ?')
					const body = JSON.stringify({ name, value })
					fetch('/api/envelopes', {
						method: 'POST',
						mode: 'cors',
						cache: 'no-cache',
						credentials: 'same-origin',
						headers: {
							'Content-Type': 'application/json',
						},
						body,
					})
						.then((response) => {
							if (response.ok)
								return response.json()
							else
								throw new Error(response)
						})
						.then((response) => console.log(response.statusText))
						.catch((err) => console.log(err))
				}}
			>
				add envelope
			</button>
		</StyledMenu>
	)
}

export default Menu
