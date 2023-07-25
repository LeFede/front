import { useState } from 'react'
import { reactLogo } from '@/assets'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = (e: ClickEvent) => {
    e.target.innerHTML = 'asd'
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 onClick={handleClick}>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1)
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
