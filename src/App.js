import { useState } from 'react';
import React from 'react'

const App = () => {
  let getTime=new Date().toLocaleTimeString();

  const[time,setTime]=useState(getTime);

  const updateTime=()=>{   //when this function call set the updated time and store in time state
    getTime=new Date().toLocaleTimeString();
    setTime(getTime);
  }

  setInterval(updateTime,1000)
  return (
    <div className='container'>
      <h1>{time}</h1>
    </div>
  )
}

export default App;