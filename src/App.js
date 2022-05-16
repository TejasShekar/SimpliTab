import { useEffect, useState } from "react";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { UserOnBoarding } from "./components/UserOnboarding";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("p8extension");
    setUser(user);
  }, []);

  return (
    <div className="App flex-center flex-col text-center">
      {user === null ? <UserOnBoarding /> : <HomePage />}
    </div>
  );
}

export default App;
