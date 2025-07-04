import React from "react";
import Header from "../Other/Header";
import TaskListDashboard from "../Other/TaskListDashboard";
import TaskListSwipe from "../TaskList/TaskListSwipe";

const EmployeeDashboard = () => {
  return (
    <div className="h-screen bg-[#1c1c1c] p-10">
      <Header/>
      <TaskListDashboard/>
      <TaskListSwipe/>
    </div>
  );
};

export default EmployeeDashboard;
