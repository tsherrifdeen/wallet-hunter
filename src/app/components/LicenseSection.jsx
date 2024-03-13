"use client";
import React from "react";
const LicenseSection = () => {
  let display = false;
  const displayDuration = () => {
    display = !display;
  };

  return (
    <div className="w-full mt-6 text-white">
      <h3 className="mb-4 text-xl font-semibold">License</h3>
      <input
        type="text"
        className="w-full bg-transparent rounded-lg"
        placeholder="Enter License Key Here"
      />
      <button
        className="w-full p-3 mt-4 font-semibold uppercase border border-purple-800 rounded-lg hover:bg-purple-800"
        onClick={displayDuration}
      >
        Enter
      </button>
      <div className="mt-6">
        {display ? (
          <p className="text-md">
            License Active | <strong>1 year</strong> remaining
          </p>
        ) : (
          <p className="text-md">
            Free trial | <strong>7</strong> days remaining
          </p>
        )}
      </div>
    </div>
  );
};

export default LicenseSection;
