import React from 'react'
import Box from './box.js'
import "./board.css"

export default function Board({board,onClick}) {
  return (
    <div className="board">
      {
        board.map((value,indx)=>{
            return <Box value={value} onClick={()=>value===null && onClick(indx)}/>
        })
      }
    </div>
  )
}
