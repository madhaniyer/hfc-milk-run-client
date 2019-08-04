import { useState } from "react";
function useToggle(initialVal = false) {
  // call useState, "reserve piece of state"
  const [state, setState] = useState(initialVal);
  const toggle = (newState) => {
    setState(newState);
  };
  // return piece of state AND a function to toggle it
  return [state, toggle];
}
export default useToggle;
