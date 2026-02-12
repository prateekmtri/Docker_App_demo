"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://backend-container:5000")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to connect backend");
      });
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Next.js Frontend 🚀</h1>
      <h2>Message from Backend:</h2>
      <p>{message}</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
