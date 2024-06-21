import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function handleloginsubmit(e) {
    e.preventDefault();
    try {
      await axios.post("/auth/login", {
        email,
        password,
      });
      setemail("");
      setpassword("");
      alert("Login successfully");
    } catch (error) {
      alert("Please Register First");
    }
  }
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="mb-32">
        <h1 className="text-center text-4xl">Login</h1>
        <form className="max-w-md mx-auto  mt-4" onSubmit={handleloginsubmit}>
          <input
            value={email}
            type="email"
            placeholder="Your@email.com"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            value={password}
            type="password"
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />
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
