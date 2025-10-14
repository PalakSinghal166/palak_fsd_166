import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [verified, setVerified] = useState(false);
  const [input, setInput] = useState("");

  const handleVerify = () => {
    if (input.trim().toLowerCase() === "react") {
      setVerified(true);
    } else {
      setVerified(false);
      alert("Verification failed! Try typing 'react'.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-200 text-gray-800">
      <div className="flex gap-6 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo w-20 hover:scale-110 transition" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react w-20 hover:scale-110 transition" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-4">Vite + React</h1>

      <div className="card bg-white rounded-2xl shadow-lg p-6 text-center w-80">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mb-4 transition"
        >
          count is {count}
        </button>
        <p className="text-gray-500 text-sm">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div className="verify-section mt-8 bg-white p-6 rounded-2xl shadow-md w-80 text-center">
        <h2 className="text-xl font-semibold mb-2">Verification</h2>
        <p className="text-sm text-gray-600 mb-3">
          Type <code>react</code> below and click verify 👇
        </p>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter verification text"
        />
        <button
          onClick={handleVerify}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
        >
          Verify
        </button>

        {verified && (
          <p className="text-green-600 font-semibold mt-3">✅ Verified Successfully!</p>
        )}
      </div>

      <p className="read-the-docs text-gray-600 mt-6 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
