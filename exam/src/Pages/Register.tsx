// import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Nav from "../components/Nav";
// useEffect
interface userinto {
  userName: string;
  email: string;
  password: string;
}
export default function register() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, seterror] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inputText, setInputText] = useState<userinto>({
    userName: "",
    email: "",
    password: "",
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r">
        <div className="card drop-shadow-3xl py-3 px-5 flex flex-col justify-around items-center rounded-md  w-2/5 max-sm:w-5/6 max-md:w-5/6 h-3/5 bg-white shadow">
          <h2 className="text-center p-5 text-2xl font-bold text-[#e38a56]">
            Register
          </h2>
          <form className="flex flex-col gap-2 w-full justify-center items-center">
            <label className=" text-center text-md max-sm:text-sm opacity-60">
              UserName
            </label>
            <input
              className="border border-[#e38a56] focus:border-2 focus:outline-0 rounded-md text-sm w-full p-1"
              placeholder="Enter the username"
              type="text"
              onChange={(e) => {
                setInputText({ ...inputText, userName: e.target.value });
              }}
              onFocus={() => seterror("")}
            />
            <label className="text-center text-md max-sm:text-sm opacity-60">
              Email
            </label>
            <input
              className="border border-[#e38a56]focus:border-2 focus:outline-0 rounded-md text-sm w-full p-1"
              placeholder="Enter the email"
              type="email"
              onChange={(e) => {
                setInputText({ ...inputText, email: e.target.value });
              }}
              onFocus={() => seterror("")}
            />
            <label className=" text-center text-md max-sm:text-sm opacity-60">
              Password
            </label>
            <input
              className="border border-[#e38a56] focus:border-2 focus:outline-0 rounded-md text-sm w-full p-1"
              placeholder="Enter the password"
              type="password"
              onChange={(e) => {
                setInputText({ ...inputText, password: e.target.value });
              }}
              onFocus={() => seterror("")}
            />
          </form>
          <button className="w-3/4 text-white p-1 rounded-full bg-[#e38a56] max-sm:text-sm">
            Sign up
          </button>
          <div className="flex flex-col justify-center"> </div>
        </div>
      </div>
    </>
  );
}
