import { useState } from "react";

function useInput(initialValues, onSubmit) {
  const [inputs, setInputs] = useState({
  content: initialValues.content,
  date: initialValues.date,
  clock: initialValues.clock,
});

  const [error, setError] = useState(null);
  
  const handleInputChange = (e) => {
   if( e.target.name === 'content'){
        setInputs({...inputs,content:e.target.value})
   }
   if( e.target.name === 'date'){
        setInputs({...inputs,date:e.target.value})
   }
    if (e.target.name === "clock") {
      setInputs({ ...inputs, clock: e.target.value });
    }
    setError(null);
  };

  const handleSubmit = () => {

    if (inputs.content.length < 2) {
      setError("Input is required for at least two characters");
      return;
    }
    onSubmit(inputs);
    setInputs({ content: "", date: "", clock: "" });
  };
  return [handleInputChange, handleSubmit, error, inputs];
}

export default useInput;