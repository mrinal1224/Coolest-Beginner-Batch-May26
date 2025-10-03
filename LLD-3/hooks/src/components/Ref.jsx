import React, { useState , useRef } from 'react'

function Ref() {
    const [input , setInput] = useState('')
    const inputRef = useRef(null)
    console.log(inputRef)

    function reset(){
        setInput('')
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = 'red'
        inputRef.current.style.color = 'yellow'

    }
  return (
    <div>


        <h1>useRef</h1>

        <input ref={inputRef} onChange={((e)=>setInput(e.target.value))} value={input} type='text' />
         <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Ref