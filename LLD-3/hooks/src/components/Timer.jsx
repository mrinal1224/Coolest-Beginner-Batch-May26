import React, { useEffect, useState } from 'react'

function Timer() {
    const [count , setCount] = useState(0)

    useEffect(()=>{
        console.log('Timer Started')

        const interval = setInterval(()=>{
           console.log('Timer Running')
          setCount((prev)=>prev+1)
        } , 1000)


        // clean up function for useEffect
        return ()=>{
          clearInterval(interval) 
          console.log('useEffect Stopped')
        }

    } , [])

  return (
    <h1>This is the Count Value {count}</h1>

  )
}

export default Timer