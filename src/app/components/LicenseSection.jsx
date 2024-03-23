"use client";
import React, { useState } from "react";
const LicenseSection = () => {
  // let display = false;
  // const displayDuration = () => {
  //   display = !display;
  // };

  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("No License detected");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://wallet-psv2.onrender.com/api/v1/license/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            licensekey: inputValue,
          },
        }
      );
      const data = await response.json();
      if (data.status == "valid") {
        setResponse(data.msg);
      }
      console.log(data);
    } catch (error) {
      setResponse("Invalid License Key");
    }
  };

  return (
    <div className="w-full mt-6 text-white">
      <h3 className="mb-4 text-xl font-semibold">License</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="w-full bg-transparent rounded-lg"
        placeholder="Enter License Key Here"
      />
      <button
        className="w-full p-3 mt-4 font-semibold uppercase border border-purple-800 rounded-lg hover:bg-purple-800"
        onClick={handleSubmit}
      >
        Enter
      </button>
      <div className="mt-6">
        <p className="text-md">{response}</p>
      </div>
    </div>
  );
};

export default LicenseSection;
