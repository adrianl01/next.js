"use client";
import MyButton from "components/Button";
import { useState } from "react";

function OtherPage() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };
  return (
    <div className="flex flex-col items-center justify-around h-screen">
      <h1>This is Another Page</h1>
      <MyButton children="Click Me" onClick={handleClick} />
      <p>Button clicked {number} times</p>
    </div>
  );
}

export default OtherPage;
