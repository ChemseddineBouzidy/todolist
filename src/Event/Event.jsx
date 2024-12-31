import React from 'react'

function Event() {
    function handleClick() {
        alert('boom')
    }
  return (
    <>
    <button onClick={handleClick}>Click</button>
    onchage
    <input type='text' onChange={handleClick} />
    

    </>
  )
}

export default Event
