import { useState } from "react";
import { useToggle } from "./custom-hooks/useToggle";
import { Button } from "./App.styles";

function App() {
  const [btnColor, setBtnColor] = useState("red");
  const [isBtnEnabled, setIsBtnEnabled] = useToggle(true);

  const newBtnColor = btnColor === "red" ? "blue" : "red";

  return (
    <div>
      <Button
        onClick={() => setBtnColor(newBtnColor)}
        bgColor={btnColor}
        disabled={!isBtnEnabled}
      >
        Change to {newBtnColor}
      </Button>
      <input
        type="checkbox"
        id="toggleBtn"
        checked={!isBtnEnabled}
        onChange={setIsBtnEnabled}
      />
      <label htmlFor="toggleBtn">Toggle btn ability</label>
    </div>
  );
}

export default App;
