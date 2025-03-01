import React, { useState } from 'react';

function Login() {
  const [userForm, setUserForm] = useState({ name: "", password: "" });

  function formHandler(e){
    const { name, value } = e.target; 

    setUserForm((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };

  return (
    <div>
      <h1>User Form</h1>
      <form>
        <input
          type="text"
          name="name"
          value={userForm.name}
          onChange={formHandler}
        /><br /><br />

        <input
          type="password"
          name="password"
          value={userForm.password}
          onChange={formHandler}
        /><br /><br />

        <p>Name: {userForm.name}</p>
        <p>Password: {userForm.password}</p>
      </form>
    </div>
  );
}

export default Login;
