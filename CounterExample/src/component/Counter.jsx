import React, { useState } from 'react'

function Counter() {
    const[count,setCount] =useState(0);
    function setData()
    {
        setCount(count+1);
        console.log(count);
        setCount(count+1);
        console.log(count);

    }
  return (
    <div>
      <h1 align="center">Counter Example</h1>
      <h2>Counter Value:{count}</h2>
      <button onClick={setData}>Increase Counter</button>
    </div>
  )
}

export default Counter
