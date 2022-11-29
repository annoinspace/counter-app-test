import "./App.css"
import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)
  // function decreaseCounter() {
  //   setCounter((prevCounter) => prevCounter - 1)
  // }
  // function increaseCounter() {
  //   setCounter((prevCounter) => prevCounter + 1)
  // }

  return (
    <div className="App">
      <header className="App-header" style={{ flexDirection: "row" }}>
        {/* using the callbacks defined above */}
        {/* <button onClick={decreaseCounter}>-</button>
        <span style={{ margin: "10px" }}>{counter}</span>
        <button onClick={increaseCounter}>+</button> */}

        <button onClick={() => setCounter(counter - 1)}>-</button>
        <span style={{ margin: "10px" }}>{counter}</span>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </header>
    </div>
  )
}

export default App
