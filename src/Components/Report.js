import React from 'react'
import {useState} from 'react'

function Report() {
  let [count,setCounter] = useState([1])
  let Click=()=>{
    setCounter([...count,count[count.length-1]+1])
  }
  return (

    <div>
      <h1>{count}</h1>
      <button onClick={Click}>Click here</button>
    </div>
  )
}

export default Report