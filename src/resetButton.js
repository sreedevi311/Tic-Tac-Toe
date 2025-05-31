import React from 'react'
import "./resetButton.css"
export default function ResetButton({resetGame}) {
  return (
    <div>
      <button className='reset-button' onClick={resetGame}>Reset</button>
    </div>
  )
}
