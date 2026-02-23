import { useState, useRef, useEffect } from "react";

const UseRef: React.FC = () => {
  const intervalRef = useRef<number>(null);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);


    return () => clearInterval(Number(intervalRef.current));

  }, []);

  console.log("rendering...  ")  // component re-rendered bcoz of useState not of useRef...!!

  return <div>{count}</div>;
};

export default UseRef;
