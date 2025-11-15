"use client";
import MyButton from "components/Button";
import { useState } from "react";

export default function OtherPage() {
  const [number, setNumber] = useState(0);
  const handleClick = () => setNumber((n) => n + 1);

  return (
    <div className="flex flex-col items-center justify-around h-screen">
      <h1>This is Another Page</h1>
      <MyButton onClick={handleClick}>Click Me</MyButton>
      <p>Button clicked {number} times</p>
    </div>
  );
}
