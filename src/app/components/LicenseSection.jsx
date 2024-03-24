import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsValidated, setLicenseKey } from "@/lib/actions";
import { useSelector } from "react-redux";

const LicenseSection = () => {
  const key = useSelector((state) => state.licenseKey);
  const [inputValue, setInputValue] = useState(key);
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const isValidated = useSelector((state) => state.isValidated);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
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

      setResponse(data.msg);
      if (data.status === "valid") {
        dispatch(setIsValidated(true));
        dispatch(setLicenseKey(inputValue));
        setResponse(data.msg);
      }
      console.log(data);
    } catch (error) {
      setResponse("Invalid License Key");
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full mt-6 text-white">
      <h3 className="mb-4 text-lg font-semibold">License</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="w-full text-black bg-white rounded-lg bg-opacity-80"
        placeholder="Enter License Key"
      />
      <button
        className="w-full p-3 mt-4 font-semibold uppercase border border-purple-800 rounded-lg hover:bg-purple-800"
        onClick={handleSubmit}
      >
        {isLoading ? "Checking..." : "Enter"}
      </button>
      <div className="mt-6">
        <p className="text-md">
          {isValidated ? "License Key valid and activated" : response}
        </p>
      </div>
    </div>
  );
};

export default LicenseSection;
