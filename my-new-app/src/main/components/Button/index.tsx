import React from 'react'

const Button = ({label,onClick}:{label:string,onClick:()=>void}) => {
  return (
    <div className="button">
        <div className="label">{label}</div>
        <button onClick={()=> onClick()}></button>
    </div>
  )
}

export default Button