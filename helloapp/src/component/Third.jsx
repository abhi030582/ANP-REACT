import React from 'react'
import Second from './Second';

function Third(props) {
  return (
    <div>
        <h2>Third Component</h2>
      <Second msg="Message from Third component" />
    </div>
  )
}

export default Third
