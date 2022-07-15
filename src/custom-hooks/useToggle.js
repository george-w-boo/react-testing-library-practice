import { useState } from "react";

export const useToggle = (initialState) => {
  const [state, setState] = useState(initialState);

  const toogle = () => setState((prev) => !prev);

  return [state, toogle];
};
