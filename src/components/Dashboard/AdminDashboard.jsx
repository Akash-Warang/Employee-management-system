import React from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllAssignedTasks from "../Other/AllAssignedTasks";

const AdminDashboard = () => {
  return (
    <div className="p-7 h-screen w-full">
      <Header />
      <CreateTask/>
      <AllAssignedTasks/>
    </div>
  );
};

export default AdminDashboard;
