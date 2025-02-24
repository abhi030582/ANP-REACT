import React from 'react'

function First(props) {
 //   const { id, name, addr } = props.data;
 const data = props.users;
   props.fun();
 
  return (
    <div>
        <h2>First Component</h2>
        <hr />
        {data.map((user, index) => (
        <div key={index}>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Address: {user.address}</p>
          <hr color="red" />
        </div>
      ))}
    </div>
  )
}

export default First
