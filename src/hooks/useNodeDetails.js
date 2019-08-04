import { useState } from "react";
export default initialVal => {
  // call useState, "reserve piece of state"
  const [state, setState] = useState(initialVal);
  const setValues = nodeDetails => {
    setState(nodeDetails);
  };
  /*const reset = () => {
    setValues([{}]);
  };*/
  // return piece of state AND a function to toggle it
  return [state, setValues];
}
