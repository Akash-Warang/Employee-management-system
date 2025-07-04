import React from "react";

const TaskListDashboard = () => {
  return (
    <div className="flex screen mt-10 gap-3">
      <div className="bg-red-700 w-[30%] px-6 py-9 rounded-xl">
        <h1 className="font-semibold text-3xl">0</h1>
        <h1 className="text-xl ">New Task</h1>
      </div>
      <div className="bg-green-700 w-[30%] px-6 py-9 rounded-xl">
        <h1 className="font-semibold text-3xl">0</h1>
        <h1 className="text-xl">Completed</h1>
      </div>
      <div className="bg-blue-700 w-[30%] px-6 py-9 rounded-xl">
        <h1 className="font-semibold text-3xl">0</h1>
        <h1 className="text-xl">Accepted</h1>
      </div>
      <div className="bg-yellow-700 w-[30%] px-6 py-9 rounded-xl">
        <h1 className="font-semibold text-3xl">0</h1>
        <h1 className="text-xl">Failed</h1>
      </div>
    </div>
  );
};

export default TaskListDashboard;
