import React, { useState } from 'react'

const App = () => {
  const [num,setNum] = useState();
  return (
    <div>
      <h1>Welcome To Redux</h1>

      <div>
        <h1>You Enter This Number:{num}</h1>
        <select value={num} onChange = { (event) => {
          setNum(event.target.value);
        }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>        
  )
}

export default App