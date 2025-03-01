import { useState } from 'react'
import UserInfo from './component/UserInfo'
import ProductList from './component/ProductList'
import Counter from './component/Counter'
import Login from './component/Login'
import UserLogin from './component/Login/UserLogin'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import './App.css'

function App() {
  return (
    <>
   /
{/* <UserInfo />
<hr color="red"/>
<ProductList /> */}

{/* <Login /> */}

<Router>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
    </Router>
  
     
    </>
  )
}

export default App
