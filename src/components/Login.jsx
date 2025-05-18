import React, { useState } from "react";
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    alert("Login successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <form
        className="bg-white shadow-md rounded-lg px-8 py-8 w-full max-w-sm flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-2">Login</h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-blue-900 font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-3 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-blue-900 font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
            className="px-3 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </div>
        {error && (
          <div className="text-red-500 text-center text-sm">{error}</div>
        )}
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
        <div className="text-center text-sm mt-2">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;