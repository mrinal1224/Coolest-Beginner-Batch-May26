import React from 'react'

function Child({name , sayHelloFn}) {
    console.log('Child Rendered')
  return (
    <div>
    <button>{name}</button>
    <h1>{sayHelloFn()}</h1>
    </div>
  )
}

export default React.memo(Child)