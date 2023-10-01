import React from 'react'

function Button({handleClick}) {
  return (
    <div>
        <button className="btn btn-primary" type="button" onClick={handleClick}>Button</button>
    </div>
  )
}

export default Button