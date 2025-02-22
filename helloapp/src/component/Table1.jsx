import React from 'react'

function Table1() {
      const name="Amit Kumar";
      const addr ="Bhopal";
      const email = "amit@gmail.com";
      return (
        <div style={{ padding: "20px" }}>
         <table border="1px">
            <tr>
                <td>Name</td>
                <td>Address</td>
                <td>Email</td>
            </tr>
            <tr>
                <td>{name}</td>
                <td>{addr}</td>
                <td>{email}</td>
            </tr>
         </table>
        </div>
  )
}

export default Table1
