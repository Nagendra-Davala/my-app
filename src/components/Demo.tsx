import { useState } from "react";

function Demo() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <h2>Demo</h2>
      <input value={count} disabled={true}></input>
      <br></br>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br></br>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Demo;
