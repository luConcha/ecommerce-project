import { useState } from 'react';

function useForm(callback, defaults) {
  //estado unico para guardar los datos del formulario en un objecto
  const [input, setInput] = useState(defaults);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    callback(input);
  };

  return {
    input,
    handleInputChange,
    handleSubmit,
  };
}

export default useForm;
