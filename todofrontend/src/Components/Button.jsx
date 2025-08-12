import React from 'react'

const Button = ({text,click,style}) => {
  return (
    <button onClick={click} style={style}>{text}</button>
  )
}

export default Button
