import React,{useState} from "react";
import Board from "./board.js";
import ScoreBoard from "./scoreBoard.js";
import ResetButton from "./resetButton.js";
function App() {
  const winConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  const [board,setBoard]=useState(Array(9).fill(null));
  const [xPlaying,setXPlaying]=useState(true);
  const [scores,setScores]=useState({xScore:0,oScore:0});
  const [gameOver,setGameOver]=useState(false);

  const handleBoxClicks=(boxIndx)=>{
    const updateBoard=board.map((value,indx)=>{
      if(indx===boxIndx){
        return xPlaying===true? "x" : "o";
      }else{
        return value;
      }
    })
    let winner=checkWinner(updateBoard);
    if(winner){
      if(winner==="x"){
        let {xScore}=scores;
        xScore+=1;
        setScores({...scores,xScore});
      }else{
        let {oScore}=scores;
        oScore+=1;
        setScores({...scores,oScore});
      }
    }
    console.log(scores); 
    setBoard(updateBoard);
    setXPlaying(!xPlaying);
  }

  const checkWinner=(board)=>{
    for(let i=0;i<winConditions.length;i++){
      const [x,y,z]=winConditions[i];
      if(board[x] && board[x]===board[y] && board[y]===board[z]){
        console.log(board[x]);
        setGameOver(true);
        return board[x];
      }
    }
  }

  const resetGame=()=>{
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }
    return (
        <div className="App">
          <ScoreBoard scores={scores} xPlaying={xPlaying}/>
          <Board board={board} onClick={gameOver ? resetGame : handleBoxClicks}/>
          <ResetButton resetGame={resetGame}/>
        </div>
    );
}

export default App;

/* 

https://my-ocr-service.cognitiveservices.azure.com/

8s4XQF3TVIdyAfd0Mst5dCHcsuZ9jciBFNrVguVzBptQmSaFoMFuJQQJ99BCACGhslBXJ3w3AAAFACOGioHU

*/

/*
import LiveOCR from "./LiveOCR";
function App() {
  return (
    <div className="p-4">
      <LiveOCR />
    </div>
  );
}
export default App;


/(?:Serial\s*No\.?\s*[:\-]?\s*)(\d+)/i;
*/