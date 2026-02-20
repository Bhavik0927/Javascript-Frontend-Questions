import React, { useMemo, useState, useTransition } from "react";
import type { ChangeEvent } from "react";
import "./App.css";

const App: React.FC = () => {

  const bigList:string[] = useMemo(() => {
    return Array.from({ length: 1000}, (_, i) => `Item ${i}`)
  },[])

  const [query, setQuery] = useState<string>("");
  const [list, setList] = useState<string[]>(bigList);

  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value;
    setQuery(value);

    startTransition(() =>{
      const filtered:string[] = bigList.filter((item) => 
        item.toLowerCase().includes(value.toLowerCase())
      )
      setList(filtered);
    })
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Search Large List </h1>

      <input
        type="text"
        value={query}
        placeholder="Type to search..."
        onChange={handleChange}
        style={{
          padding: "8px",
          width: "300px",
          fontSize: "16px",
        }}
      />
      {isPending && (
        <p style={{ color: "blue" }}>Filtering results...</p>
      )}
      <div
        style={{
          marginTop: "20px",
          height: "400px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {list.map((item,idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
