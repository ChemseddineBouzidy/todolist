import React from 'react'

function HelloWorld({name ,age}) {
  let isAdult = false
  return <h1>helo {name} an i am {age} {age >= 18 ? "adult": "minor"}</h1>


}

export default HelloWorld
