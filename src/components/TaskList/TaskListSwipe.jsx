import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskListSwipe = ({data}) => {
  return (
    <div
      id="TaskListSwipe"
      className="flex h-[55%] items-center justify-start w-full mt-10 py-5 gap-5 overflow-x-auto"
    >
     {data.tasks.map((el,i)=>{
        if(el.active){
          return <AcceptTask key={i} data={el}/>
        }
        if(el.NewTask){
          return <NewTask key={i} data={el}/>
        }
        if(el.completed){
          return <CompleteTask key={i} data={el}/>
        }
        if(el.failed){
          return <FailedTask key={i} data={el}/>
        }
     })}
    </div>
  );
};

export default TaskListSwipe;
