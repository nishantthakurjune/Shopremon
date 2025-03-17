
const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <form
            className="h-full bg-white p-6 rounded-xl shadow-md w-96"
          >
            <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
    
            {/* Email Input */}
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {/* {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
     */}
            {/* Password Input */}
            <label htmlFor="password" className="block mt-4 font-medium text-gray-700">
              Password
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {/* {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
     */}
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      );
    };

export default Login