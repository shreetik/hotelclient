import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="mb-32">
        <h1 className="text-center text-4xl">Login</h1>
        <form className="max-w-md mx-auto  mt-4">
          <input type="email" placeholder="Your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't Have an Account Yet?{" "}
            <Link className="underline text-black" to="/signup">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
