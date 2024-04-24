"use client";
import axios from "axios";
import {  useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border rounded-md shadow-md px-8 py-4 ">
        <div className="p-1 pb-4 font-bold font-2xl text-center ">
          Welcome To Next JS World
        </div>
        <div className="w-full">
          <input
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border rounded-md p-1 w-full text-sm"
          />
        </div>
        <div className="mt-2">
          <input
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border rounded-md p-1 w-full text-sm"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-1 text-sm rounded-md mt-4 w-full"
            onClick={async () => {
              console.log("started")

              const response = await axios.post(
                "http://localhost:3000/api/user",
                {
                  username:email,
                  password,
                }
              );
              console.log("success")
              router.push("/");
            }}
          >
            Sign Up
          </button>
        </div>
        <div className="text-xs text-center mt-2 underline text-gray-600 cursor-pointer">
          Already Registered? Login.
        </div>
      </div>
    </div>
  );
}
