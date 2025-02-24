import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Multiply from './component/Multiply'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <h1 align="center">Counter Example of props drilling</h1><br />
    <hr color="red" />
     <h2>Counter:</h2> {count}<br /><br/>
     <button onClick={()=>setCount(count+1)}>Increase Count</button>
     <button onClick={()=>setCount(count-1)}>Decrease Count</button>
     <hr color="red" />
     <h2>Multiply Component</h2>
     <Multiply a ={count} />
     
    </>
  )
}

export default App
