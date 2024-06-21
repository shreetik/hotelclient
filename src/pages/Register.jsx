import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="mb-32">
        <h1 className="text-center text-4xl">Register</h1>
        <form className="max-w-md mx-auto  mt-4">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Sign-In</button>
          <div className="text-center py-2 text-gray-500">
            Have an Account ?{" "}
            <Link className="underline text-black" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
