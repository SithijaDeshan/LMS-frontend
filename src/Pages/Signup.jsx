import React from 'react'
import "../Css/Login.css"
import userr from "../assets/logo/userr.png";
import APIService from '../api/APIService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCookies } from 'react-cookie';

const Signup = () => {
//registation function
const [response ,setResponse] = useState([])
const [username,setUsername] =useState('')
const [password,setPassword] = useState('')
const [email,setEmail] = useState('')
const [name,setName] = useState('')

  const [phone,setPhone] = useState('')
  const navigate = useNavigate()
  const [role] = useCookies(["role"]);
  if(response.id!=null){

    if(role["role"]==="admin"){
      // toast.success("Registraion Successfully!")
      navigate("/admin")

    }else{
    // toast.success("Registraion Successfully!")
    navigate("/login")
    }
  }


const RegisterBtn = () =>{
  APIService.RegisterUser({email,password,name,username,phone})
  .then((resp) => {
    setResponse(resp)
    navigate("/login")
  })
  .catch(error => console.log(error))
} 
  return (
    <>

    <div className="coonn min-h-screen flex items-center justify-center bg-gray-300">
    <div className="container mx-auto p-16 ">
    <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          {/* <div className="container rounded-2xl bg-gray-500"> */}
          <div className="bg-black sm:mx-auto sm:w-full sm:max-w-lg rounded-3xl py-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">

          
             
            <img src={userr} alt="Sign In" className='myimg'/>





          <div className="container rounded-2xl bg-gray-900 w-84 h-84"></div>
          <h2 className="bon mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white">
            Sign Up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">

          <div>
              <label htmlFor="Name" className="name block text-lg font-medium leading-6 text-white">
                FullName
              </label>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder='Enter Full Name'
                  value={name} onChange={e => setName(e.target.value)}
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {response.name!==null ? (
              <>
              
                <span className="error text-center text-lg text-danger">{response.fullname}</span>
                </>
                 ) :null
                 }
              </div>
            </div>

            <div>
              <label htmlFor="userName" className="name block text-lg font-medium leading-6 text-white">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder='Enter username'
                  value={username} onChange={e => setUsername(e.target.value)}
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {response.username!==null ? (
              <>
             
                <span className="error text-center text-lg text-danger">{response.username}</span>
                </>
                 ) :null
                 }
              </div>
            </div>


            <div>
              <label htmlFor="userName" className="name block text-lg font-medium leading-6 text-white">
                Phone No
              </label>
              <div className="mt-2">
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder='Enter Phone No'
                    value={phone} onChange={e => setPhone(e.target.value)}
                    required
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {response.phone!==null ? (
                    <>

                      <span className="error text-center text-lg text-danger">{response.username}</span>
                    </>
                ) :null
                }
              </div>
            </div>

            <div>
              <label htmlFor="email" className="name block text-lg font-medium leading-6 text-white">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder='Enter Your Email'
                  value={email} onChange={e => setEmail(e.target.value)}
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {response.email!==null ? (
              <>
              
                <span className="error text-center text-lg text-danger">{response.email}</span>
                </>
                 ) :null
                 }
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-lg font-medium leading-6 text-white">
                  Password
                </label>
                {/* <div className="text-lg">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Enter Your Password'
                  value={password} onChange={e => setPassword(e.target.value)}
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {response.password!==null ? (
              <>
              
                <span className="error text-center text-lg text-danger">{response.password}</span>
                </>
                 ) :null
                 }
              </div>
            </div>

            <div>
              <button
                onClick={RegisterBtn}
                className="bonn flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </div>
          {role["role"]==='admin' ? (
            <>
          <br></br><br></br>
          </>
          ):(
          <p className="mt-10 text-center text-lg text-white">
          Already have an Account?{' '}
          <a href="/login" className="font-semibold leading-6 text-white hover:text-indigo-500">
            Sign In
          </a>
        </p>)
          }


        </div>
        </div>
      </div>

         

        </div>
        </div>
        </div>

        </>
  )

 
  
  }

export default Signup




