import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import {  logedOut } from '../redux/Actions/AuthAction';

const Header = () => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const handleLogout = () => {
    console.log("her");
    
    dispatch(logedOut());
  }
  return (
    <div className='flex justify-between border-b-2 border-b-gray-700'>
      <div>
        <p className='text-4xl font-bold'>Todo</p>
      </div>
      {token && <Button text={"Logout"} click={handleLogout} style={{
        backgroundColor: "white",
        color: "black",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        display: "flex",
        textAlign: "center"
      }} />}

    </div>
  )
}

export default Header
