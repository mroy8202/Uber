import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import {UserDataContext} from "../context/UserContext.jsx";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");


  const navigate = useNavigate();
  const {user,setUser} = React.useContext(UserDataContext);

  const submitHandler = async(e) => {
    e.preventDefault();
    
    const newUser = {
      fullname:{
        firstname:firstname,
        lastname:lastname
      },
      email:email,
      password:password
    }


    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);

    if(response.status === 201){
      const data = response.data;
      
      setUser(()=>{
        return data.user;
      });
      localStorage.setItem("token",data.token)
      localStorage.setItem("profile", JSON.stringify(data.user));

      navigate("/home");
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's Your Name</h3>
          <div className="flex gap-4 mb-5">
            <input
              type="text"
              placeholder="Firstname"
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base outline-none"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Lastname"
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base outline-none"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's Your email</h3>
          <input
            type="email"
            placeholder="example@email.com"
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            placeholder="password"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg "
            type="submit"
          >
            Signup
          </button>
        </form>
        <p className="text-center">
          Already have an account?
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
        This site is protected by reCAPTCHA and the <span className="underline">Google Policy</span> and <span className="underline">Terms of Service</span> apply

        </p>
      </div>
    </div>
  );
};

export default UserSignup;