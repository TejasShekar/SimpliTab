import { useEffect } from "react";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { UserOnBoarding } from "./components/UserOnboarding";
import { useUserInfo } from "./context/user-context";

function App() {
  const { user, setUser } = useUserInfo();
  useEffect(() => {
    const user = localStorage.getItem("p8extension");
    setUser(user);
  });

  return (
    <div className="App flex-center text-center">
      {user === null ? <UserOnBoarding /> : <HomePage />}
    </div>
  );
}

export default App;
