import { useState } from "react";
import { useUserInfo } from "../context/user-context";

export const UserOnBoarding = () => {
  const [error, setError] = useState(false);
  const { setUser } = useUserInfo();

  const userHandler = (e) => {
    if (e.target.value === "") {
      setError(true);
    }
    if (e.key === "Enter" && e.target.value !== "") {
      setUser(e.target.value);
      localStorage.setItem("p8extension", e.target.value);
    }
  };

  return (
    <>
      <h2 className="p-2">Hello, what's your name?</h2>
      <input
        className="userInput text-center"
        type="text"
        onKeyPress={userHandler}
        onChange={() => setError(false)}
      />

      {error && (
        <p className="pt-2 error text-center">Please enter a valid input</p>
      )}
    </>
  );
};
