import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UserContext from "./contexts/UserContext ";
import { useEffect, useState } from "react";
import { getToken, checkToken } from "./api/storage";

function App() {
  const [user, setUser] = useState(false)
  useEffect(()=>{
    setUser(checkToken())
    console.log("use changed")
    if(user){
      <Navigate to={"/"}/>
    }
  }, [user])
  
  return (
    <UserContext.Provider value={[user, setUser]}>

      <div className="App font-mono">
        <Navbar />
        <Outlet />
      </div>
    </UserContext.Provider>

  );
}

export default App;
