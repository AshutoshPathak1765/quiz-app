import React, { useRef } from "react";

export const Start = ({ setUsername }) => {
  const inputRef = useRef(null);
  const handleClick = () => {
    setUsername(inputRef.current.value);
  };
  return (
    <div className="start">
      <input placeholder="enter your name" ref={inputRef} className="startInput" />
      <button onClick={handleClick} className="startButton">
        Start
      </button>
    </div>
  );
};
