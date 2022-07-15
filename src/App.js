import { useState } from "react";
import "./App.css";

function App() {
  const [btnColor, setBtnColor] = useState("red");

  const newBtnColor = btnColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        onClick={() => setBtnColor(newBtnColor)}
        style={{ backgroundColor: btnColor }}
      >
        Change to {newBtnColor}
      </button>
    </div>
  );
}

export default App;
