import React from "react";
import { useAuth } from "./contexts/authContext";

const HeaderMain = () => {
  const { user, setUser } = useAuth();
  console.log(user);
  return (
    <div className="flex items-center justify-center p-4 bg-white shadow-md">
      {user ? (
        <div className="flex items-center gap-x-3">
          <img
            src={user.avatar}
            alt=""
            className="object-cover w-10 h-10 rounded-full"
          />
          <span className="text-sm font-medium">
            Welcome back! <strong>{user.fullname}</strong>
          </span>
        </div>
      ) : (
        <span className="text-sm font-medium">Welcome</span>
      )}
      <button
        className="p-2 ml-auto text-black bg-gray-300 rounded-md"
        onClick={() => setUser(null)}
      >
        Sign Out
      </button>
    </div>
  );
};

export default HeaderMain;
