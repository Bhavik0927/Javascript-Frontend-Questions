import { useState } from "react";
import InputA from "./InputA";
import InputB from "./InputB";


const Main = () => {
    const [text, setText] = useState<string>("");

  return (
    <div>
        <InputA text={text} setText={setText} />
        <InputB text={text} setText={setText} />
    </div>
  )
}


export default Main;