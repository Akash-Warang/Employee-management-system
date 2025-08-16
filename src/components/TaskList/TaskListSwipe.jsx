import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskListSwipe = () => {
  return (
    <div
      id="TaskListSwipe"
      className="flex h-[55%] items-center justify-start w-full mt-10 py-5 gap-5 overflow-x-auto"
    >
      <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FailedTask />
    </div>
  );
};

export default TaskListSwipe;
