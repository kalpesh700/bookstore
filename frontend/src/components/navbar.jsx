import React, { useState, useEffect } from 'react';
import Login from './login';
<<<<<<< HEAD

=======
>>>>>>> a7cea7e906f9d0493739c442fcd8555b17dfb9ed
function Navbar() {
  // Initialize the theme state from localStorage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Update the theme in localStorage and apply it to the document
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
<<<<<<< HEAD
      <li><a href="/course">Books</a></li>
=======
      <li><a href="/course">Course</a></li>
>>>>>>> a7cea7e906f9d0493739c442fcd8555b17dfb9ed
      <li><a href="/Contact">Contact</a></li>
      <li><a href="#about">About</a></li>
    </>
  );

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
<<<<<<< HEAD
        <div className={`navbar bg-white text-black`}>
=======
        <div className={`navbar bg-base-100 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
>>>>>>> a7cea7e906f9d0493739c442fcd8555b17dfb9ed
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <button tabIndex={0} className="btn btn-ghost lg:hidden" aria-label="Toggle menu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <ul
                tabIndex={0}
<<<<<<< HEAD
                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
=======
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
>>>>>>> a7cea7e906f9d0493739c442fcd8555b17dfb9ed
              >
                {navItems}
              </ul>
            </div>
            <a href="/" className="text-2xl cursor-pointer font-bold">bookstore</a>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end">
            {/* Search Input */}
            <div className="hidden md:block">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" aria-label="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>

<<<<<<< HEAD
            {/* Login Button */}
            <div className="ml-4">
              <a href="#login" className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer" onClick={() => document.getElementById('my_modal_3').showModal()}>
=======
            {/* Theme Toggle */}
            <label className="swap swap-rotate ml-4">
              <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
                aria-label="Toggle theme"
              />
              <svg className="swap-off h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                {/* Sun icon */}
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg className="swap-on h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                {/* Moon icon */}
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            {/* Login Button */}
            <div className="ml-4">
              <a href="#login" className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"onClick={()=>document.getElementById('my_modal_3').showModal()}>
>>>>>>> a7cea7e906f9d0493739c442fcd8555b17dfb9ed
                Login
              </a>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
