import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    console.log("1");

    if (authData && authData.admins.find((e) => email == e.email && password == e.password)) {

      console.log("2");
      setUser("admin");
      const admin = authData.admins.find(
        (e) => email == e.email && password == e.password
      );
      console.log(admin);
    } else if (authData) {
      console.log("3");
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        setLocalStorage("loggedInUser", JSON.stringify("employee"));
        console.log(loggedInUserData);
      } else {
        console.log("4");
        alert("Invalid");
      }
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (<AdminDashboard />) : user == "employee" ? (<EmployeeDashboard data={loggedInUserData} />) : ("")}
    </>
  );
};

export default App;
