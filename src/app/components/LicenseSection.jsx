import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsValidated } from "@/lib/actions";

const LicenseSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("No License detected");
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
        {isLoading ? "Checking..." : "Enter"}
      </button>
      <div className="mt-6">
        <p className="text-md">{response}</p>
      </div>
    </div>
  );
};

export default LicenseSection;
