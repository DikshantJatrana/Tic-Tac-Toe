import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [xturn, setXturn] = useState(true);
  const [state, setState] = useState(Array(9).fill(null));

  const CheckWinner = () => {
    const WinnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let winner of WinnerLogic) {
      const [a, b, c] = winner;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const winner = CheckWinner();

  const handleclick = (index) => {
    if (state[index] == null) {
      const copyState = [...state];
      copyState[index] = xturn ? "X" : "O";
      setState(copyState);
      setXturn(!xturn);
    }
    return false;
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };
  return (
    <>
      {winner ? (
        <>
          <div className="text-xl font-semibold text-red-400">
            {winner} Won the Game
          </div>
          <button
            onClick={() => handleReset()}
            className="p-2 my-5 font-semibold border-2 bg-red-400 text-white border-red-400 rounded-lg"
          >
            Play Again
          </button>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center w-[30%] aspect-square">
          <div className="flex justify-evenly items-center w-full h-[32%]">
            <Square onclick={() => handleclick(0)} value={state[0]} />
            <Square onclick={() => handleclick(1)} value={state[1]} />
            <Square onclick={() => handleclick(2)} value={state[2]} />
          </div>
          <div className="flex justify-evenly items-center w-full h-[32%]">
            <Square onclick={() => handleclick(3)} value={state[3]} />
            <Square onclick={() => handleclick(4)} value={state[4]} />
            <Square onclick={() => handleclick(5)} value={state[5]} />
          </div>
          <div className="flex justify-evenly items-center w-full h-[32%]">
            <Square onclick={() => handleclick(6)} value={state[6]} />
            <Square onclick={() => handleclick(7)} value={state[7]} />
            <Square onclick={() => handleclick(8)} value={state[8]} />
          </div>
        </div>
      )}
    </>
  );
}

export default Board;
