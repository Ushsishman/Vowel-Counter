import React, { useState } from "react";

const VowelCounter = () => {
  const [results, setResults] = useState(0);
  const [input, setInput] = useState("");

  const handleSubmit = (e, input) => {
    e.preventDefault();

    //If input field is empty it will return alert
    if (input.trim().length !== 0) {
      let count = 0;
      for (let i = 0; i < input.length; i++) {
        if (
          input.charAt(i) === "a" ||
          input.charAt(i) === "e" ||
          input.charAt(i) === "i" ||
          input.charAt(i) === "o" ||
          input.charAt(i) === "u"
        ) {
          count++;
        }
      }
      setResults(count);
    } else {
      alert("Input field is empty!");
    }
  };
  return (
    <div className="w-full bg-sky-600 flex items-center justify-center h-screen">
      <div className="text-center w-80 bg-slate-300 drop-shadow-2xl">
        <h1 className="text-2xl font-semibold m-6">Vowel Counter</h1>
        <div>
          <form onSubmit={(e) => handleSubmit(e, input)}>
            <input
              className="bg-slate-200 border-solid border-2 border-slate-400 mb-10"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}></input>
            <br />
            <button className="text-white bg-stone-800 px-2 py-1 mb-8">
              Calculate
            </button>
          </form>
        </div>
        <div className="text-white bg-stone-800">
          Your text has {results} vowels
        </div>
      </div>
    </div>
  );
};

export default VowelCounter;
