import React, { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    // Submit logic here
    alert("Signup successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400">
      <form
        className="bg-white bg-opacity-90 shadow-2xl rounded-xl px-8 py-10 w-full max-w-md flex flex-col gap-5 animate-fade-in"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-1">Sign Up</h2>
        <p className="text-gray-600 text-center mb-2">Create your MovieApp account</p>
        
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-blue-900 font-medium">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none transition"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-blue-900 font-medium">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none transition"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-blue-900 font-medium">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none transition"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPassword" className="text-blue-900 font-medium">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Re-enter your password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none transition"
          />
        </div>
        {error && (
          <div className="text-red-500 text-center text-sm">{error}</div>
        )}
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:from-blue-800 hover:to-blue-600 transition"
        >
          Sign Up
        </button>
        <div className="text-center text-sm mt-2">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-700 font-medium hover:underline"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Signup;
