import { useState } from "react";

function useInput(initialValues, onSubmit, validation) {
  const [inputs, setInputs] = useState(initialValues);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = () => {
   const validationResult = validation(inputs);

   if (validationResult) {
     setError(validationResult);
     return;
   }
   
    onSubmit(inputs);
    setInputs(initialValues);
  };
  return [handleInputChange, handleSubmit, error, inputs];
}

export default useInput;