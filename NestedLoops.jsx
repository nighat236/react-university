 import React from 'react'
import Courses from './Courses';

function NestedLoops() {
  const uni=[
    {
      uniName:'Iqbal University',
      city:'Karachi',
      email:'iqbal@ymail.com',
      courses:[
        { courseName: 'BSCS', duration: '4 Years', semfee:"Rs. 75000/-" },
        { courseName: 'MBA', duration: '3 Years', semfee:"Rs. 65000/-" },
        { courseName: 'MIT', duration: '2 Years', semfee:"Rs. 75000/-" },
      ]
    }
  ];

  return (
    <div>
      <h1>LIST OF UNIVERSITIES</h1>
      {
        uni.map((uni, index) => (
          <div key={index} style={{
            backgroundColor:'#ccc',
            padding:'20px',
            margin: '20px',
            borderBottom:'4px solid black',
            borderRadius:'10px',
            width:'600px'
          }}>
            <h1>Name : <span style={{color: 'blue'}}>{uni.uniName}</span></h1>
            <h1>City : <span style={{color:'blue'}}>{uni.city}</span></h1>
            <h1>Email : <span style={{color:'blue'}}>{uni.email}</span></h1>
            <h2 style={{color:'green'}}>Courses Offered</h2>
            <Courses courses={uni.courses}/>
          </div>
        ))
      }
    </div>
  )
}

export default NestedLoops;
