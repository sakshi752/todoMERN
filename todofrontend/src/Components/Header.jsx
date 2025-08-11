import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between border-b-2 border-b-gray-700'>
      <div>
        <p className='text-4xl font-bold'>Todo</p>
        </div>
      <div className='flex space-x-5'>
        <button className='bg-white p-3 font-bold text-lg text-black rounded-md'>LogIn</button>
        <button className='bg-white p-3 font-bold text-lg text-black rounded-md'>SignIn</button>
      </div>
    </div>
  )
}

export default Header
