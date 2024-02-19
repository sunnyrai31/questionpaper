import { useState } from "react";
const useStateCustom = (intialValue) => {
  const [state, setState] = useState(intialValue);
  return [state, setState];
};
export default useStateCustom;
