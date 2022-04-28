import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  SignInWithPassword,
  SignOut,
  getAuth,
} from "firebase/auth";
import { auth } from "./firebase-config";

const FirebaseAuth = () => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    console.log(user);
    console.log("create user successfully");
  };

  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto shadow-lg p-5 mb-10">
        <form onSubmit={handleCreateUser}>
          <input
            type="text"
            name="email"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="password"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your password"
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-semibold text-white bg-blue-500 rounded-lg"
          >
            SignUp
          </button>
        </form>
        <div className="flex items-center mt-10 gap-x-5">
          <span></span>
          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-gray-500 rounded-lg"
          >
            SignOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirebaseAuth;
