import { useState } from "react";

const useFormvalidate = (validationFunction) => {
  const [input, setInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validationFunction(input);
  const hasError = isTouched && !valueIsValid;


  const valueChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };
 const reset=()=>{
     setInput("")
 }
  return {
    enteredValue: input,
    valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset
  };
};

export default useFormvalidate;
