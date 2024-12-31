import React from 'react'

function TextField({inputName,children,inputLabel}) {
  return (
    <div>
      <label htmlFor="">{inputLabel}</label>
      <input type="text" name={inputName}/>
      <div>
        {children}
      </div>
    </div>
  )
}

export default TextField
