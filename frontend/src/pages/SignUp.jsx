import { useState } from "react";
import {useNavigate} from 'react-router-dom'
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ email: "", password: "" }); // Reset previous errors

    try {
      const res = await fetch('/api/auth/signup', { 
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include" // Allow cookies & auth headers
    });
    
      const data = await res.json();
      console.log(data);
      
      if (data.errors) {
        setErrors(data.errors);
      } else if (data.user) {
        // Redirect or update UI after successful signup
        navigate('/');
      }
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>

        {/* Email Input */}
        <label htmlFor="email" className="block font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}

        {/* Password Input */}
        <label htmlFor="password" className="block mt-4 font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}


        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
