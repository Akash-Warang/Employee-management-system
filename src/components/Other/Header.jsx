import React from 'react'

const Header = ({data}) => {
  
  const logOut = () =>{
    localStorage.setItem('loggedInUser', '');
    window.location.reload();
  }

  return (
    <div className='flex items-center justify-between'>
       <h1 className='text-2xl font-medium'>Hello,👋<br /> <span className='text-3xl font-semibold'>username</span> </h1> 
       <button onClick={logOut} className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-sm'>Log Out</button> 
    </div>
  )
}

export default Header;