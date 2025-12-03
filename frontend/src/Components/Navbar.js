import React from "react";
import logo from "../Assets/volunteer_logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 shadow-sm z-50">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo + Name Section */}
         <div className="flex items-center gap-3">
          <NavLink to="/">
          <img 
            src={logo}
            alt="Rotaract Club of Kathmandu Logo"
            className="w-12 h-auto"
          />
          </NavLink>

          <h1 className="font-bold text-xl text-[#2F3B65FF]">
            Volunteer Network Hub
          </h1>
        </div>

        {/* Menu + Join Button */}
        <div className="flex items-center gap-8">

          {/* Navigation Menu with NavLink (NO MAP USED) */}
          <nav className="flex gap-6 text-base leading-6 font-normal text-gray-900">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition duration-200 hover:text-[#87CEFAFF] font-semibold
      ${isActive ? "text-[#87CEFAFF]  border-b-2 border-[#87CEFAFF]" : ""}`
              }
            >
              Home
            </NavLink>

           

            <NavLink
              to="/events"
              className={({ isActive }) =>
                `transition duration-200 hover:text-[#87CEFAFF] font-semibold
      ${isActive ? "text-[#87CEFAFF] border-b-2 border-[#87CEFAFF]" : ""}`
              }
            >
              Events
            </NavLink>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `transition duration-200 hover:text-[#87CEFAFF] font-semibold
      ${isActive ? "text-[#87CEFAFF] border-b-2 border-[#87CEFAFF]" : ""}`
              }
            >
              About Us 
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition duration-200 hover:text-[#87CEFAFF] font-semibold
      ${isActive ? "text-[#87CEFAFF] border-b-2 border-[#87CEFAFF]" : ""}`
              }
            >
              Contact Us 
            </NavLink>
          </nav>


          {/* Join Us Button */}
          <a
            href="/join-us"
            className="bg-[#4A90E2FF] text-white font-semibold px-6 py-2 rounded-lg
                       hover:bg-[#4A90E2FF] hover:scale-105
                       transition-[colors,transform] duration-300"
          >
            Sign Up
          </a>

        </div>

      </div>
    </header>
  );
};

export default Navbar;
