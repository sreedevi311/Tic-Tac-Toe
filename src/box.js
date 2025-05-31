import React from 'react'
import "./box.css"
export default function Box({value,onClick}) {
    const style=value==="x" ? "box X" : "box O";
  return (
    <button className={style} onClick={onClick}>{value}</button>
  )
}
