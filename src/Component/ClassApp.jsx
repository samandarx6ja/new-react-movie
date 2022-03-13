import React from 'react'
class ClassApp extends React.Component {

  render() {
    const numbers = [2,6,8,4,9];

    const newNumber = numbers.map(num => 
      
      <li>{num}</li>

      )

    return (
      <div>
        <ul>{newNumber}</ul>
      </div>
    )
  }
}

export default ClassApp
