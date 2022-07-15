import { useState } from "react";
import { Button } from "./App.styles";

function App() {
  const [btnColor, setBtnColor] = useState("red");
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  let newBtnColor = btnColor === "red" ? "blue" : "red";

  const checkboxHandler = (e) => {
    setIsBtnDisabled(e.target.checked);
  };

  return (
    <div>
      <Button
        onClick={() => setBtnColor(newBtnColor)}
        bgColor={isBtnDisabled ? "grey" : btnColor}
        disabled={isBtnDisabled}
      >
        Change to {newBtnColor}
      </Button>
      <input type="checkbox" id="toggleBtn" onChange={checkboxHandler} />
      <label htmlFor="toggleBtn">Toggle btn ability</label>
    </div>
  );
}

export default App;
