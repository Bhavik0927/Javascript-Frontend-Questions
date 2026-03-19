import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);

    /*
    useEffect(() =>{
        console.log("Rendering...!!");

        return () =>{
            console.log("Cleanup");
        }
    },[count])
    */

    useEffect(() =>{
        const id = setInterval(() =>{
            console.log("running")
        },1000)

        return () => clearInterval(id);
    },[])
  return (
    <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
  )
}

export default UseEffect