import React from "react";

const CreateTask = () => {
  return (
    <div className="p-5 mt-7 bg-[#1c1c1c] rounded">
      <form className="flex flex-wrap items-start justify-between">
        <div className="w-1/2">
          <div>
            <label htmlFor="TaskTitle" className="text-sm text-gray-300">
              Task Title
            </label>
            <br />
            <input
              type="text"
              id="TaskTitle"
              placeholder="Make UI"
              className="w-4/5 text-sm bg-transparent border-[1px] border-gray-500 rounded px-2 py-1 mb-4 mt-1 outline-none"
            />
          </div>
          <div>
            <label htmlFor="Date" className="text-sm text-gray-300">
              Date
            </label>
            <br />
            <input
              type="date"
              id="Date"
              className="w-4/5 text-sm bg-transparent border-[1px] border-gray-500 rounded px-2 py-1 mb-4 mt-1 outline-none "
            />
          </div>
          <div>
            <label htmlFor="Assign" className="text-sm text-gray-300 ">
              Assign to
            </label>
            <br />
            <input
              type="text"
              id="Assign"
              placeholder="Employee name"
              className="w-4/5 text-sm bg-transparent border-[1px] border-gray-500 rounded px-2 py-1 mb-4 mt-1 outline-none "
            />
          </div>
          <div>
            <label htmlFor="Category" className="text-sm text-gray-300 ">
              Category
            </label>
            <br />
            <input
              type="text"
              id="Category"
              placeholder="Dev, design etc"
              className="w-4/5 text-sm bg-transparent border-[1px] border-gray-500 rounded px-2 py-1 mb-4 mt-1 outline-none "
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 items-end">
          <div className="w-3/4">
            <label htmlFor="Description" className="text-sm text-gray-300">
              Description
            </label>
            <br />
            <textarea
              id="Description"
              placeholder="Write description"
              className="w-full h-[10rem] text-sm bg-transparent border-[1px] border-gray-500 rounded px-2 py-1 mb-4 mt-1 outline-none"
            ></textarea>
          </div>
          <button className="w-3/4 bg-emerald-600 p-2 rounded mt-5 items-center text-center font-medium">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
