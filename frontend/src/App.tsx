import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [healthStatus, setHealthStatus] = useState('checking...')

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => setHealthStatus(data.status ?? 'unknown'))
      .catch(() => setHealthStatus('unreachable'))
  }, [])

  return (
    <div className="app">
      <h1>Todo App</h1>
      <p>Backend status: <strong>{healthStatus}</strong></p>
    </div>
  )
}

export default App
