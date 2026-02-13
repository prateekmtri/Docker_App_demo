"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");
  const [error, setError] = useState("");

  useEffect(() => {
    // 👈 Calling the LIVE Render Backend!
    fetch("https://docker-app-demo.onrender.com")
      .then((res) => {
        if (!res.ok) throw new Error("Network response failed");
        return res.json();
      })
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error(err);
        setError("Failed to connect backend");
      });
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Next.js Frontend 🚀</h1>
      <h2>Message from Backend:</h2>
      {error ? (
        <p style={{ color: "red", fontWeight: "bold" }}>❌ {error}</p>
      ) : (
        <p style={{ color: "green", fontSize: "20px", fontWeight: "bold" }}>✅ {message}</p>
      )}
    </div>
  );
}