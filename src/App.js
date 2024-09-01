import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UserContext from "./contexts/UserContext ";
import { useEffect, useState } from "react";
import { getToken } from "./api/storage";

function App() {
  const [user, setUser] = useState(false)
  useEffect(()=>{
    setUser(!!getToken())
    console.log(!!getToken())
  }, [])
  return (
    <UserContext.Provider value={[user, setUser]}>

    <div className="App font-mono">
      {user && <Navigate to={"/"}/>}
      <Navbar />
      <Outlet />
    </div>
    </UserContext.Provider>

  );
}

export default App;
