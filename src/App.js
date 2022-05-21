import { useEffect } from "react";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { UserOnBoarding } from "./components/UserOnboarding";
import { useUserInfo } from "./context/user-context";

function App() {
  const { user, setUser } = useUserInfo();
  useEffect(() => {
    const user = localStorage.getItem("SimpliTab-user");
    setUser(user);
  });

  return (
    <div className="bg">
      <div className="screen"></div>
      <div className="App flex-center flex-col text-center">
        {user === null ? <UserOnBoarding /> : <HomePage />}
      </div>
    </div>
  );
}

export default App;
