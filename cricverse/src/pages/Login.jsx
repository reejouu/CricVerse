import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-400">
            Welcome Back to CricVerse
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to your account
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm">
              <Link
                to="/signup"
                className="font-medium text-green-400 hover:text-green-300"
              >
                Dont have an account? Sign up
              </Link>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-gray-400 hover:text-gray-300">
                Forgot your password?
              </a>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6"
          >
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-green-700 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign In
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
