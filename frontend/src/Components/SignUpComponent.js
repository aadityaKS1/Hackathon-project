import React from 'react';
import logo from '../Assets/volunteer_logo.png'
import { useNavigate } from "react-router-dom";

function SignUpComponent() {

      const navigate = useNavigate();
  const handleRegisterClub = () => {
    // You can also handle form submission or API call here
    navigate("/register_club"); // Redirects without reloading
  };
  return (
    <div className="flex justify-center items-center h-screen gap-8">
      {/* Left rectangle */}
      <div className="w-[576px] h-[468px] bg-[#4A90E21A] rounded-[12px]">
        {/* Content inside the rectangle */}
      </div>

      {/* Right container */}
      <div className="w-[448px] h-[468px] bg-[#F8F9FAFF] rounded-[14px] shadow-[0_1px_2px_rgba(0,0,0,0.87)] p-8 flex flex-col justify-between">
        {/* Top Section */}
        <div>
               <div className="flex flex-col items-center mb-6">
          
          <img 
            src={logo}
            alt="Rotaract Club of Kathmandu Logo"
            className="w-12 h-auto"
          />
          

          <h1 className="font-bold text-xl text-[#2F3B65FF]">
            Volunteer Network Hub
          </h1>
        </div>
          <h2 className="font-poppins text-[24px] leading-[32px] font-bold text-[#171A1FFF] text-center mb-4">
            Log In to Your Account
          </h2>
          <p className="font-inter text-[14px] leading-[20px] font-normal text-[#565D6DFF] text-center mb-6">
Welcome back! Please enter details to continue          </p>

          {/* Email Input */}
          <input
            type="text"
            placeholder="Email"
            className="w-full h-[40px] px-4 mb-4 font-inter text-[14px] leading-[22px] font-normal
                       bg-white border border-[#BDC1CAFF] rounded-[12px] outline-none
                       hover:border-[#BDC1CAFF] hover:text-[#565D6DFF]
                       focus:border-[#BDC1CAFF] focus:text-[#565D6DFF]
                       disabled:border-[#BDC1CAFF] disabled:text-[#565D6DFF] disabled:bg-white"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full h-[40px] px-4 mb-6 font-inter text-[14px] leading-[22px] font-normal
                       bg-white border border-[#BDC1CAFF] rounded-[12px] outline-none
                       hover:border-[#BDC1CAFF] hover:text-[#565D6DFF]
                       focus:border-[#BDC1CAFF] focus:text-[#565D6DFF]
                       disabled:border-[#BDC1CAFF] disabled:text-[#565D6DFF] disabled:bg-white"
          />

          {/* Sign Up Button */}
          <button
            className="w-full h-[40px] mb-4 font-inter text-[14px] leading-[22px] font-medium
                       text-white bg-[#4A90E2FF] rounded-[12px] border-0
                       hover:bg-[#3181DDFF] active:bg-[#2272CEFF] disabled:opacity-40"
          >
            Log In 
          </button>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <span className="font-inter text-[14px] leading-[20px] font-normal text-[#565D6DFF]">
            Don't have an account?
          </span>
          <button
            className="ml-2 font-inter text-[14px] leading-[22px] font-medium text-[#4A90E2FF] bg-transparent
                       rounded-[10px] hover:text-[#3181DDFF] active:text-[#2272CEFF]"
                             onClick={handleRegisterClub}

          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpComponent;
