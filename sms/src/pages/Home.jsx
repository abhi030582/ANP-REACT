import React from "react";
import sms from '../sms.png'

const Home = () => {
  return (
    <div>
      <h1>Welcome to Student Management System</h1>
      <p>Dummy project to manage student Record</p>
      <img src={sms} alt="SMS" width="100%" height="300px" />
      
    </div>
  );
};

export default Home;
