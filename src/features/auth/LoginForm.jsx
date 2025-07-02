import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLogin } from "./useLogin";

import Spinner from "../../ui/Spinner";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  function handleSignup(e) {
    e.preventDefault();
    navigate("/signup");
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">News Hub</h1>
        <p className="text-xl text-gray-600">Welcome to News Hub</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm text-gray-500 mb-2">
            Users name or Email
          </label>
          <input
            type="email"
            id="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="w-full px-0 py-3 text-lg text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm text-gray-500 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className="w-full px-0 py-3 text-lg text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
            placeholder="••••••••"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <button
            type="button"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Forgot password?
          </button>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full bg-gray-700 hover:bg-gray-800 text-white py-4 rounded-full text-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {!isLoading ? "Sign in" : <Spinner />}
        </button>

        {/* Divider */}
        <div className="text-center text-gray-500 text-sm">or</div>

        {/* Google Sign In */}
        <div className="flex justify-center">
          <div id="google-signin-button"></div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center text-sm text-gray-600">
          New to News Hub?{" "}
          <button
            type="button"
            onClick={handleSignup}
            className="text-gray-800 hover:text-gray-600 font-medium transition-colors"
            disabled={isLoading}
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
