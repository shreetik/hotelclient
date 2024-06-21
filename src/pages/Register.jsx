import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function registerUser(e) {
    e.preventDefault();
    try {
      await axios.post("/auth/signup", {
        name,
        email,
        password,
      });
      setname("");
      setemail("");
      setpassword("");
      alert("Registration is successful");
    } catch (error) {
      alert("User is Already Registered");
    }
  }
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="mb-32">
        <h1 className="text-center text-4xl">Register</h1>
        <form className="max-w-md mx-auto  mt-4" onSubmit={registerUser}>
          <input
            value={name}
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            value={email}
            type="email"
            placeholder="Enter Your@email.com"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            value={password}
            type="password"
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />
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
