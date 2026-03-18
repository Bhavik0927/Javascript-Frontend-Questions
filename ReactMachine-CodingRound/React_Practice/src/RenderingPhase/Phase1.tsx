import { useEffect, useLayoutEffect, useState } from "react";

const Phase1 = () => {
    const [count, setCount] = useState<number>(0);

    useLayoutEffect(() =>{
        console.log("Layout effect")
    });

    useEffect(() =>{ console.log("Effect")});

  return (
    <button onClick={() => setCount(count + 1)}>{count}</button>
  );
};

export default Phase1;
