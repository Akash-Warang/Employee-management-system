import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="w-[380px] h-full flex-shrink-0 bg-yellow-400 rounded-xl p-5">
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
        <div className='mt-8'>
            <button className='py-1 px-2 text-sm w-full'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask