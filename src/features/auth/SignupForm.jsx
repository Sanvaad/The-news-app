import { useState } from "react";
import { useSignup } from "./useSignup";
import Spinner from "../../ui/Spinner";

function SignupForm({ onBackToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const { signup, isLoading } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !confirmPassword || !fullName) return;
    
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    
    signup({ email, password, fullName });
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">News Hub</h1>
        <p className="text-xl text-gray-600">Create your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name Field */}
        <div>
          <label htmlFor="fullName" className="block text-sm text-gray-500 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={isLoading}
            className="w-full px-0 py-3 text-lg text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm text-gray-500 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="w-full px-0 py-3 text-lg text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm text-gray-500 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className="w-full px-0 py-3 text-lg text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
            placeholder="Create a password"
            required
            minLength={6}
          />
        </div>

        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm text-gray-500 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isLoading}
            className="w-full px-0 py-3 text-lg text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
            placeholder="Confirm your password"
            required
          />
        </div>

        {/* Create Account Button */}
        <button
          type="submit"
          className="w-full bg-gray-700 hover:bg-gray-800 text-white py-4 rounded-full text-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {!isLoading ? "Create Account" : <Spinner />}
        </button>

        {/* Back to Login Link */}
        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onBackToLogin}
            className="text-gray-800 hover:text-gray-600 font-medium transition-colors"
            disabled={isLoading}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;