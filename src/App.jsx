import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == 123) {
      setUser("admin");
      console.log("isAdmin");
    } else if (email == "employee@example.com" && password == 123) {
      setUser("employee");
    } else {
      alert("Invalid credintials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : " "}
      {user == "employee" ? <EmployeeDashboard /> : <AdminDashboard />}
    </>
  );
};

export default App;
