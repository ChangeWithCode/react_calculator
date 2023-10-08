import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDeleteLast = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleAppendOperator = (operator) => {
    setInput((prevInput) => prevInput + operator);
  };

  const handleAppendNumber = (number) => {
    setInput((prevInput) => prevInput + number);
  };

  const handleAppendDecimal = () => {
    setInput((prevInput) => prevInput + ".");
  };

  const handleCalculate = () => {
    try {
      if (input) {
        setInput(eval(input).toString());
      }
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-[50%] rounded bg-gray-800 p-8 shadow-md">
          <div className="mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full rounded border bg-gray-700 px-4 py-2 text-right font-mono text-lg text-white"
              placeholder="0"
              id="result"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <button
              className="col-span-2 rounded bg-gray-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-gray-700"
              onClick={handleClear}
            >
              C
            </button>
            <button
              className="rounded bg-gray-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-gray-700"
              onClick={handleDeleteLast}
            >
              ←
            </button>
            <button
              className="rounded bg-gray-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-gray-700"
              onClick={() => handleAppendOperator("/")}
            >
              /
            </button>
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
              onClick={() => handleAppendNumber("7")}
            >
              7
            </button>
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
              onClick={() => handleAppendNumber("8")}
            >
              8
            </button>
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
              onClick={() => handleAppendNumber("9")}
            >
              9
            </button>
            <button
              className="rounded bg-gray-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-gray-700"
              onClick={() => handleAppendOperator("*")}
            >
              *
            </button>
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
              onClick={() => handleAppendNumber("4")}
            >
              4
            </button>
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
              onClick={() => handleAppendNumber("5")}
            >
              5
            </button>
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
              onClick={() => handleAppendNumber("6")}
            >
              6
            </button>
            <button
              className="rounded bg-gray-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-gray-700"
              onClick={() => handleAppendOperator("-")}
            >
              -
            </button>
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
              onClick={() => handleAppendNumber("1")}
            >
              1
            </button>
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
              onClick={() => handleAppendNumber("2")}
            >
              2
            </button>
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
              onClick={() => handleClick("3")}
            >
              3
            </button>
            <button
              className="rounded bg-gray-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-gray-700"
              onClick={() => handleAppendOperator("+")}
            >
              +
            </button>
            <button
              className="col-span-2 rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
              onClick={() => handleClick("0")}
            >
              0
            </button>
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
              onClick={handleAppendDecimal}
            >
              .
            </button>
            <button
              className="rounded bg-green-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-600"
              onClick={handleCalculate}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
