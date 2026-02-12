import React from 'react';

// This function runs on the SERVER (inside Docker container)
async function getData() {
  // Container talks to Container using name
  const res = await fetch('http://backend-container:5000', { cache: 'no-store' });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

export default async function Home() {
  let data;
  let error = null;

  try {
    data = await getData();
  } catch (err) {
    console.error(err);
    error = "Failed to connect to backend container";
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Next.js Frontend 🚀</h1>
      <h2>Message from Backend:</h2>
      
      {error ? (
        <p style={{ color: "red", fontWeight: "bold" }}>❌ {error}</p>
      ) : (
        <p style={{ color: "green", fontSize: "20px", fontWeight: "bold" }}>
          ✅ {data.message}
        </p>
      )}

      <p style={{ marginTop: "20px", color: "#666" }}>
        (Fetched via Docker Network: frontend-container ➝ backend-container)
      </p>
    </div>
  );
}