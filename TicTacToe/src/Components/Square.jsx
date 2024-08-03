import React from "react";

function Square(props) {
  return (
    <>
      <div
        onClick={props.onclick}
        className="text-2xl font-extrabold flex justify-center items-center w-[33%] h-[99%] border-2 border-black"
      >
        {props.value}
      </div>
    </>
  );
}

export default Square;
