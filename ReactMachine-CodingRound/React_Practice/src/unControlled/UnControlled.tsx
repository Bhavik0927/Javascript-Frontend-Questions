import { useRef } from "react";

const UnControlled = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () =>{
        console.log(inputRef.current.value);
    }
  return (
  <div>
    <input ref={inputRef} type="file" />
    <button onClick={handleSubmit}>Submit</button>
  </div>
  )
};

export default UnControlled;
