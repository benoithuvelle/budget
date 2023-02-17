import { useEffect, useState } from 'react'
import './App.css'
import Menu from './components/Menu.jsx'

function App()
{
    const [budget, setBudget] = useState(undefined)
    useEffect(() => {
        fetch('/api/envelopes')
            .then((response) => response.json())
            .then((response) => setBudget(response))
    }, [])
    return (
        <div className="App">
            <header className="App-header">
                {budget && <Menu budget={budget} />}
            </header>
        </div>
    )
}

export default App
