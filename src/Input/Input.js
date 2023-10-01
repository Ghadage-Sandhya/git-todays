import React from 'react'

function Input({type,value,onChange}) {
  return (
    <div>
        <input type={type} value={value} onChange={onChange}/>
    </div>
  )
}

export default Input