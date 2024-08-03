import { useState } from "react";
import "./App.css";
import Title from "./Components/Title";
import Square from "./Components/Square";
import Board from "./Components/Board";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <Title />
        <Board />
      </div>
    </>
  );
}

export default App;
