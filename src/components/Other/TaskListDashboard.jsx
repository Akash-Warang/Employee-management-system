import React from "react";

const TaskListDashboard = ({data}) => {
  return (
    <div className="flex screen mt-10 gap-3">
      <div className="bg-red-700 w-[30%] px-6 py-9 rounded-xl">
        <h1 className="font-semibold text-3xl">{data.taskCount.newTask}</h1>
        <h1 className="text-xl ">New Task</h1>
      </div>
      <div className="bg-green-700 w-[30%] px-6 py-9 rounded-xl">
        <h1 className="font-semibold text-3xl">{data.taskCount.completed}</h1>
        <h1 className="text-xl">Completed Task</h1>
      </div>
      <div className="bg-blue-700 w-[30%] px-6 py-9 rounded-xl">
        <h1 className="font-semibold text-3xl">{data.taskCount.active}</h1>
        <h1 className="text-xl">Accepted Task</h1>
      </div>
      <div className="bg-yellow-700 w-[30%] px-6 py-9 rounded-xl">
        <h1 className="font-semibold text-3xl">{data.taskCount.failed}</h1>
        <h1 className="text-xl">Failed Task</h1>
      </div>
    </div>
  );
};

export default TaskListDashboard;
