"use client";
import { MyButton } from "components/Button";
import { useState } from "react";

export default function Other() {
  const [number, setNumber] = useState(0);
  const handleClick = () => setNumber((n) => n + 1);

  return (
    <>
      <h1>This is Another Page</h1>
      <MyButton onClick={handleClick}>Click Me</MyButton>
      <p>Button clicked {number} times</p>
    </>
  );
}
