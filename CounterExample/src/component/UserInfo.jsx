import React, { useState } from 'react'
import OrderInfo from './OrderInfo';

function UserInfo() {
    const [name,setInfo] =useState("");
    const userHandler =(e)=>{
      setInfo(e.target.value);
    }
  
  return (
    <div>
      <h1 align="center">Customer Info Component</h1>
      <input type="text" name="name" onChange={userHandler} placeholder='enter user name here'/><br/><br />
      <p>Input Data:<h2>{name}</h2></p>
      <OrderInfo data ={name} />
    
    </div>
  )
}

export default UserInfo
