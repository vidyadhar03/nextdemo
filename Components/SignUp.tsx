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
      <div className="border rounded-md shadow-md px-8 py-4">
        <div className="p-1 pb-4 font-bold font-2xl text-center">
          Register to next demo
        </div>
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
              setPassword(e.target.value);
            }}
            className="border rounded-md p-1"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-black text-white px-4 py-2 rounded-md mt-2 w-full"
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
      </div>
    </div>
  );
}
