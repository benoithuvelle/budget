import { useEffect } from 'react'

function App()
{
    useEffect(() => {
        fetch('/api/envelopes')
            .then((response) => response.json())
            .then((response) => console.debug(response))
    }, [])
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
