import React, { useState } from 'react';
import logo from '../Assets/volunteer_logo.png';
import { useNavigate } from "react-router-dom";

function SignUpComponent() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegisterClub = () => navigate("/register_club");


const handleLogin = async () => {
  setError("");
  setSuccess("");

  if (!email.trim() || !password.trim()) {
    setError("Please enter both email and password.");
    return;
  }

  try {
    const response = await fetch("http://localhost:8000/api/volunteers/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim(), password: password.trim() }),
    });

    const data = await response.json();
    console.log("Login response:", data);

    if (!response.ok) {
      setError(data.error || JSON.stringify(data) || "Login failed.");
    } else {
      setSuccess("Login successful! Redirecting...");
      setTimeout(() => navigate("/"), 2000);
    }
  } catch (err) {
    console.error(err);
    setError("Something went wrong. Try again later.");
  }
};




  return (
    <div className="flex justify-center items-center h-screen gap-8">
      {/* Left rectangle */}
      <div className="w-[576px] h-[468px] bg-[#4A90E21A] rounded-[12px]"></div>

      {/* Right container */}
      <div className="w-[448px] h-[468px] bg-[#F8F9FAFF] rounded-[14px] shadow-[0_1px_2px_rgba(0,0,0,0.87)] p-8 flex flex-col justify-between">
        {/* Top Section */}
        <div>
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="Volunteer Logo" className="w-12 h-auto" />
            <h1 className="font-bold text-xl text-[#2F3B65FF]">Volunteer Network Hub</h1>
          </div>

          <h2 className="font-poppins text-[24px] leading-[32px] font-bold text-[#171A1FFF] text-center mb-4">
            Log In to Your Account
          </h2>
          <p className="font-inter text-[14px] leading-[20px] font-normal text-[#565D6DFF] text-center mb-6">
            Welcome back! Please enter details to continue
          </p>

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[40px] px-4 mb-4 font-inter text-[14px] leading-[22px] font-normal
                       bg-white border border-[#BDC1CAFF] rounded-[12px] outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[40px] px-4 mb-2 font-inter text-[14px] leading-[22px] font-normal
                       bg-white border border-[#BDC1CAFF] rounded-[12px] outline-none"
          />

          {/* Error / Success Messages */}
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-2">{success}</p>}

          <button
            className="w-full h-[40px] mb-4 font-inter text-[14px] leading-[22px] font-medium
                       text-white bg-[#4A90E2FF] rounded-[12px] border-0 hover:bg-[#3181DDFF] active:bg-[#2272CEFF]"
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>

        <div className="text-center">
          <span className="font-inter text-[14px] leading-[20px] font-normal text-[#565D6DFF]">
            Don't have an account?
          </span>
          <button
            className="ml-2 font-inter text-[14px] leading-[22px] font-medium text-[#4A90E2FF] bg-transparent rounded-[10px]"
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
