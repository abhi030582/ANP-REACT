import React from 'react'
import First from './First'

function Second(props) {
    const user =[
        {
          "id": "U001",
          "name": "Amit Sharma",
          "address": "Mumbai, Maharashtra"
        },
        {
          "id": "U002",
          "name": "Priya Verma",
          "address": "Delhi, Delhi"
        },
        {
          "id": "U003",
          "name": "Rajesh Kumar",
          "address": "Bengaluru, Karnataka"
        },
        {
          "id": "U004",
          "name": "Neha Singh",
          "address": "Kolkata, West Bengal"
        },
        {
          "id": "U005",
          "name": "Suresh Reddy",
          "address": "Hyderabad, Telangana"
        },
        {
          "id": "U006",
          "name": "Anjali Nair",
          "address": "Chennai, Tamil Nadu"
        },
        {
          "id": "U007",
          "name": "Vikram Patel",
          "address": "Ahmedabad, Gujarat"
        },
        {
          "id": "U008",
          "name": "Meera Iyer",
          "address": "Pune, Maharashtra"
        },
        {
          "id": "U009",
          "name": "Arun Thakur",
          "address": "Jaipur, Rajasthan"
        },
        {
          "id": "U010",
          "name": "Kavita Das",
          "address": "Lucknow, Uttar Pradesh"
        }
      ]
      
    function print()
    {
        alert(props.msg);
    }
  return (
    <div>
        <h2>Second Component</h2>
       
      <First users={user} fun={print} />

    </div>
  )
}

export default Second
