import React from 'react';
import { RiSpyFill } from "react-icons/ri";
import {Link,NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center pl-9 pr-9">
        {/* Logo or Brand */}
        <div className="text-white text-lg font-bold flex flex-col items-center justify-center ">
            <Link to="/">
                <RiSpyFill />Mail
            </Link></div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          {/* <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Login</a>
          <a href="#" className="text-white hover:text-gray-300">Register</a> */}
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <NavLink
                    to="/about"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/login"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/register"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        Register
                    </NavLink>
                </li>
            </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
