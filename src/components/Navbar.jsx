import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/start-learning">Start Learning</NavLink>
      </li>
      <li>
        <NavLink to="/tutorials">Tutorials</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/my-profile">My Profile</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="h-5">

      </div>
      <div className="navbar bg-[#EEFBF3] p-4 rounded-2xl border border-green-300 ">
      <div className="navbar-start">
        <div className="dropdown">
            <Link to='/' className=" hidden md:flex">
                <h1 className="text-3xl ralewayfont font-bold">Lingo<span className="text-[#309255]">Bingo</span></h1>
            </Link>
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
     
        {user ? (
          <button onClick={handleSignOut}  className="btn bg-white px-10 hover:bg-green-800 hover:text-white font-medium border border-green-500">
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn bg-white px-10 hover:bg-green-800 hover:text-white font-medium border border-green-500">Login</button>
          </Link>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
