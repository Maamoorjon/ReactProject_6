import "./styles.css";
import { useState } from "react";

export default function App() {
  const [valA, setValA] = useState(0);
  const [valB, setValB] = useState(10);
  const [valC, setValC] = useState(100);

  return (
    <div className="App">
      <p>ボタンAを{valA}押しました</p>
      <button
        onClick={() => {
          setValA(valA + 1);
        }}
      >
        buttonA
      </button>
      <p>ボタンAを{valB}押しました</p>
      <button
        onClick={() => {
          setValB(valB + 1);
        }}
      >
        buttonB
      </button>
      <p>ボタンAを{valC}押しました</p>
      <button
        onClick={() => {
          setValC(valC + 1);
        }}
      >
        buttonC
      </button>
    </div>
  );
}
