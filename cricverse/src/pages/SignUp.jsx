import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mt-6">
        <motion.div
          className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-green-400">
              Join CricVerse Today
            </h2>
            <p className="mt-2 text-sm text-gray-400">Create your account</p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm">
              <div className="mb-4">
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Full Name"
                />
              </div>
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

            <div className="text-sm mt-4">
              <Link
                to="/login"
                className="font-medium text-green-400 hover:text-green-300"
              >
                Already have an account? Log In
              </Link>
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
                Sign Up
              </button>
            </motion.div>
          </form>

          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">
              By signing up, you agree to our{" "}
              <Link
                to="/terms"
                className="font-medium text-green-400 hover:text-green-300"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="font-medium text-green-400 hover:text-green-300"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
