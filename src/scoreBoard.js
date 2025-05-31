import React from 'react'
import "./scoreBoard.css";
export default function ScoreBoard({scores,xPlaying}) {
    const {xScore,oScore}=scores;
  return (
  <>
    <div className='gameTitle'>Tic-Tac-Toe</div>
    <div className='scoreboard'>
      <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
    </div>

  </>
  )
}
