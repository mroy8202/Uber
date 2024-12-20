import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useContext } from 'react';


const CaptainLogin = () => {
  const {captain,setCaptain} = useContext(CaptainDataContext);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();


  const submitHandler = async (e)=>{
    e.preventDefault();
    const captain = {
      email: email,
      password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

    if (response.status === 200) {
      const data = response.data

      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      localStorage.setItem("profile", JSON.stringify(data.captain));
      navigate('/captain-home')

    }

    setEmail('')
    setPassword('')
  }
  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Uber logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's Your email</h3>
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base outline-none"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            placeholder="password"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base outline-none"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button
            className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg "
            type="submit"
          >
            Login
          </button>
        </form>
          <p className="text-center">Join a fleet?<Link to="/captain-signup" className="text-blue-600">Register as a Captain</Link></p>
      </div>
      <div>
        <Link to="/login" className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg ">Sign in as User</Link>
      </div>
    </div>
    </div>
  )
}

export default CaptainLogin