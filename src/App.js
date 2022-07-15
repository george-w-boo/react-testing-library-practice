import { useState } from "react";
import { Button } from "./App.styles";

function App() {
  const [btnColor, setBtnColor] = useState("red");
  const [isBtnEnabled, setIsBtnEnabled] = useState(true);

  const newBtnColor = btnColor === "red" ? "blue" : "red";

  const checkboxHandler = (e) => {
    setIsBtnEnabled(!e.target.checked);
  };

  return (
    <div>
      <Button
        onClick={() => setBtnColor(newBtnColor)}
        bgColor={btnColor}
        disabled={!isBtnEnabled}
      >
        Change to {newBtnColor}
      </Button>
      <input type="checkbox" id="toggleBtn" onChange={checkboxHandler} />
      <label htmlFor="toggleBtn">Toggle btn ability</label>
    </div>
  );
}

export default App;
