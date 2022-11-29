import "./App.css"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(4)
  function decreaseCount() {
    setCount((prevCount) => prevCount - 1)
  }
  function increaseCount() {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div className="App">
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </div>
  )
}

export default App
