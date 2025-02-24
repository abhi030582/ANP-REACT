import React, { useState } from 'react'
import Result from './Result';

function Multiply(data) {
    return (
    <div>
      Multiply of {data.a} = {data.a * data.a}
     <Result r ={data.a * data.a}/>
    </div>
  )
}

export default Multiply
