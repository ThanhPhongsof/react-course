import React from "react";
import {
  createUserWithEmailAndPassword,
  SignInWithPassword,
  SignOut,
  getAuth,
} from "firebase/auth";
// import { db } from "./firebase-config";

const FirebaseAuth = () => {
  //   const auth = getAuth();

  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto shadow-lg p-5 mb-10">
        <form>
          <input
            type="text"
            name="email"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
          <input
            type="text"
            name="password"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-semibold text-white bg-blue-500 rounded-lg"
          >
            Add post
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirebaseAuth;
