import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className="w-[380px] h-full flex-shrink-0 bg-red-400 rounded-xl p-5">
        <div className="flex justify-between p-1 items-center">
          <h3 className="bg-red-700 text-sm rounded px-3 py-1 font-medium">
            {data.category}
          </h3>
          <h3 className="text-sm">{data.taskDate}</h3>
        </div>
        <div className="mt-5">
          <h1 className="text-2xl font-semibold">{data.taskTitle}</h1>
          <h3 className="text-sm mt-2">
            {data.taskDescription}
          </h3>
        </div>
        <div className='flex justify-between mt-8'>
            <button className='py-1 px-2 bg-green-500 text-sm'>Mark as completed</button>
            <button className='py-1 px-2 bg-red-500 text-sm'>Mark as failed</button>
        </div>
    </div>
  )
}

export default AcceptTask