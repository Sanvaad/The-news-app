import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Logout from "../features/auth/Logout";

export default function Nav() {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-semibold">News Hub</span>
          </NavLink>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </NavLink>
            <NavLink to="/bookmark" className="text-gray-300 hover:text-white transition-colors">
              Bookmarks
            </NavLink>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:bg-gray-800 p-2 rounded-md transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <NavLink 
              to="/bookmark"
              className="text-white hover:bg-gray-800 p-2 rounded-md transition-colors md:hidden"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </NavLink>
            
            <Logout />
            
            <button className="text-white hover:bg-gray-800 p-2 rounded-md transition-colors md:hidden">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
