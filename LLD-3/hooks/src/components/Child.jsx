import React from 'react'

function Child({name}) {
    console.log('Child Rendered')
  return (
    <button>{name}</button>
  )
}

export default Child