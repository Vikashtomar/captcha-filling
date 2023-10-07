 import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

 
 function App() {

  let chars = "abcdefghijklmnopqrstuvwxyz"
  const [save,setSave] = useState([])
  const [val,setVal] = useState([])
  let temp = '';

  useEffect(()=>{
    for(let i=0; i<=6; i++){
      let random = str[Math.floor(Math.random() * chars.length)]
      temp = temp + random
    }
    setSave(temp)
  },[])
   return (
     <div>App</div>
   )
 }
 
 export default App