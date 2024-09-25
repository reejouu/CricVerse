'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import {Link} from "react-router-dom"
import { AlertCircle, EyeIcon, EyeOffIcon } from 'lucide-react'

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validateForm = (e) => {
    e.preventDefault()
    const newErrors = {}
    const form = e.currentTarget
    const email = form.email.value
    const name = form.name.value

    if (!name) newErrors.name = "Name is required"
    if (!email) newErrors.email = "Email is required"
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid"
    if (password.length < 8) newErrors.password = "Password must be at least 8 characters"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      // Submit the form
      console.log("Form submitted")
    }
  }

  const getPasswordStrength = () => {
    if (password.length === 0) return 0
    if (password.length < 4) return 25
    if (password.length < 8) return 50
    if (password.length < 12) return 75
    return 100
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
      >
        <div className="text-center">
          <motion.h2
            className="text-4xl font-bold text-green-400"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join CricVerse Today
          </motion.h2>
          <p className="mt-2 text-sm text-gray-400">Create your account</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={validateForm}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
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
              {errors.name && (
                <p className="mt-1 text-xs text-red-500 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.name}
                </p>
              )}
            </div>
            <div>
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
              {errors.email && (
                <p className="mt-1 text-xs text-red-500 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="block w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 sm:text-sm pr-10"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <EyeIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.password}
                </p>
              )}
            </div>
            <div className="mt-2">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-gray-400">Password strength:</span>
                <span className="text-xs text-gray-400">{getPasswordStrength()}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-green-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${getPasswordStrength()}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                to="/login"
                className="font-medium text-green-400 hover:text-green-300"
              >
                Already have an account? Log In
              </Link>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
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
              href="/terms"
              className="font-medium text-green-400 hover:text-green-300"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="font-medium text-green-400 hover:text-green-300"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </motion.div>
    </div>
  )
}