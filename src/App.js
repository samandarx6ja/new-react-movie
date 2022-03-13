import React from 'react'

function App(props) {

  const numbers = props.numbers;
  const newNumber = numbers.map(num => <li key={num.toString()}>{num}</li>)

  return (
    <div className="App">
      <ul>{newNumber}</ul>
    </div>
  )
}

export default App;
