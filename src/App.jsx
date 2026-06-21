import React, { useState } from "react";
import "./index.css";

import { decrement, increaseByAmt, increment } from "./features/counterSlice";
import { toggleTheme } from "./features/themeSlice";

import { useDispatch, useSelector } from "react-redux";
//useDispatch is to call the reducer functions defined in slices
//useSelector is to access globalized state of which were defined in respective slices
const App = () => {
  const dispatch = useDispatch();
  const countDisplay = useSelector((state) => state.counter.value);
  const [amt, setAmt] = useState("");
  // useState enables a component to store and update local state,  amt holds the user input value
  // setAmt updates it when user types in input field
  // this value is later sent to Redux as an action payload
  
  
  const darkMode = useSelector((state) => state.theme.darkMode);

  const incrementClick = () => dispatch(increment());
  const decrementClick = () => dispatch(decrement());

  const incrementByAmtClick = () => {
    dispatch(increaseByAmt(Number(amt)));
    
  };

  const toggleThemeClick = () => dispatch(toggleTheme());

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div
        className={`w-[350px] p-6 rounded-xl shadow-lg flex flex-col gap-5 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Title of APP */}
        <h1 className="text-2xl font-bold text-center">
          Redux Counter App
        </h1>

        {/* Theme toggle */}
        <button
          onClick={toggleThemeClick}
          className="px-3 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white transition"
        >
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>

        {/* Counter display */}
        <div className="text-center text-4xl font-bold">
          {countDisplay}
        </div>

        {/* Increment / Decrement */}
        <div className="flex justify-center gap-3">
          <button
            onClick={decrementClick}
            className="w-10 h-10 rounded bg-red-500 hover:bg-red-600 text-white text-xl"
          >
            -
          </button>

          <button
            onClick={incrementClick}
            className="w-10 h-10 rounded bg-green-500 hover:bg-green-600 text-white text-xl"
          >
            +
          </button>
        </div>

        {/* Input to take number by which increment is to be done in counter */}
        <input
          type="number"
          value={amt}
          placeholder="Enter amount"
          onChange={(e) => setAmt(e.target.value)}
          //setAmt here sets the value of amount to do increment with which is passed to reducer via below  {incrementByAmtClick} event trigger
          
          className="p-2 rounded border focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
        />

        {/*  button for increment action */}
        <button
          onClick={incrementByAmtClick}
          className="py-2 rounded bg-blue-500 hover:bg-blue-600 text-white transition"
        >
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default App;