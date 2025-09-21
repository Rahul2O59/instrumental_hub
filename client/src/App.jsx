import { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("loading...");

  useEffect(() => {
    fetch("/api/hello")
      .then(r => r.json())
      .then(d => setMsg(d.message))
      .catch(() => setMsg("API error"));
  }, []);

  return (
    <main style={{minHeight:'100vh', display:'grid', placeItems:'center'}}>
      <div style={{padding:24, border:'1px solid #ddd', borderRadius:14}}>
        <h1>Vite + React + CSS</h1>
        <p>API says: {msg}</p>
        <button className="btn">Button</button>
      </div>
    </main>
  );
}