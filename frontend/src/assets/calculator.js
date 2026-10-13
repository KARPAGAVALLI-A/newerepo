import { useState } from "react";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  const calculate = (op) => {
    let x = Number(a);
    let y = Number(b);

    if (op === "+") setResult(x + y);
    if (op === "-") setResult(x - y);
    if (op === "*") setResult(x * y);
    if (op === "/") setResult(y !== 0 ? x / y : "Cannot divide");
  };

  return (
    <div>
      <h1>Calculator</h1>

      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="First number"
      />

      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Second number"
      />

      <br />

      <button onClick={() => calculate("+")}>+</button>
      <button onClick={() => calculate("-")}>-</button>
      <button onClick={() => calculate("*")}>*</button>
      <button onClick={() => calculate("/")}>/</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;