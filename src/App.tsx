import { useState } from 'react'
import ErrorBoundaryComponent from './features/ErrorBoundary'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ErrorBoundaryComponent></ErrorBoundaryComponent>
    </>
  )
}

export default App
