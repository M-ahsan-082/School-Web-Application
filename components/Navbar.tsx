
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, User as UserIcon, LogOut } from 'lucide-react';
import { useAuth } from '../App';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Teachers', href: '/teachers' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    // Only show the main navbar on the dashboard for medium screens and above, as dashboard has its own sidebar
    <nav className={`bg-white shadow-sm sticky top-0 z-50 ${isDashboard ? 'hidden md:block' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900 tracking-tight">EduStream<span className="text-blue-600">Pro</span></span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/dashboard"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all flex items-center gap-2"
                >
                  <UserIcon size={16} /> Dashboard
                </Link>
                <button 
                  onClick={logout} 
                  className="text-slate-400 hover:text-red-500 transition-colors"
                  aria-label="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all shadow-md"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-2 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to={user ? "/dashboard" : "/login"}
            onClick={() => setIsOpen(false)}
            className="block w-full text-center py-2 bg-blue-600 text-white rounded-md mt-4 font-bold"
          >
            {user ? "Dashboard" : "Sign In"}
          </Link>
          {user && (
            <button 
              onClick={() => { setIsOpen(false); logout(); }}
              className="block w-full text-center py-2 border border-red-200 text-red-600 rounded-md font-bold hover:bg-red-50"
            >
              Sign Out
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
