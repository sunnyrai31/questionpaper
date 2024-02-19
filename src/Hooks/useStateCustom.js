import { useState } from "react";
/**
 * Its custom hook - which is internally using useState hook
 * @param {*} intialValue
 * @returns
 */
const useStateCustom = (intialValue) => {
  const [state, setState] = useState(intialValue);
  return [state, setState];
};
export default useStateCustom;
