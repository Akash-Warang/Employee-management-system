import React from 'react'

const AcceptTask = () => {
  return (
    <div className="w-[380px] h-full flex-shrink-0 bg-red-400 rounded-xl p-5">
        <div className="flex justify-between p-1 items-center">
          <h3 className="bg-red-700 text-sm rounded px-3 py-1 font-medium">
            High
          </h3>
          <h3 className="text-sm">20 june 2025</h3>
        </div>
        <div className="mt-5">
          <h1 className="text-2xl font-semibold">Do Coding</h1>
          <h3 className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            explicabo dolorem minima. Autem, minus eum?
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