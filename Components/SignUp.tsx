"use client";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border rounded-md shadow-md px-8 py-4">
        <div className="p-1 pb-4 font-bold font-2xl text-center">Register to next demo</div>
        <div>
          <input
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border rounded-md p-1"
          />
        </div>
        <div className="mt-2">
          <input
            placeholder="Password"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border rounded-md p-1"
          />
        </div>
        <div className="flex justify-center"> 
          <button className="bg-black text-white px-4 py-2 rounded-md mt-2 w-full">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
