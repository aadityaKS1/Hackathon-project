import React, { useState } from "react";

function Form1() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // start empty

  const options = ["Option 1", "Option 2"];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="absolute top-[581px] left-1/2 transform -translate-x-1/2 w-[512px] h-[601px] bg-[#F8F9FAFF] rounded-[14px] shadow-[0_25px_50px_rgba(0,0,0,0.25)]">
      
      <p className="absolute top-[15px] left-[189px] font-poppins text-[24px] leading-[32px] font-bold text-[#171A1FFF]">
        Get Started
      </p>

      {/* Toggle Buttons */}
      <div className="absolute top-[58px] left-[19px] w-[471px] h-[45px] bg-[#DEE1E6FF] rounded-[20px]"></div>
      <button className="absolute top-[62px] left-[24px] w-[229px] h-[36px] px-[12px] flex items-center justify-center font-inter text-[14px] leading-[22px] font-normal text-[#323743FF] bg-[#DEE1E6FF] rounded-[16px] disabled:opacity-40">
        Volunteer
      </button>
      <button className="absolute top-[62px] left-[256px] w-[229px] h-[36px] px-[12px] flex items-center justify-center font-inter text-[14px] leading-[22px] font-normal text-white bg-[#4A90E2FF] rounded-[16px] hover:bg-[#3181DDFF] active:bg-[#2272CEFF] disabled:opacity-40">
        Organization
      </button>

      {/* Section Title */}
      <div className="absolute top-[128px] left-[136px] font-poppins text-[24px] leading-[32px] font-bold text-[#171A1FFF]">
        Organization Details
      </div>

      {/* Organization Name Input */}
      <div className="absolute top-[177px] left-[47px] opacity-100 relative">
        <input
          type="text"
          placeholder="Organization Name"
          className="w-[416px] h-[40px] pl-[34px] pr-[12px] font-inter text-[14px] leading-[22px] font-normal bg-white border border-[#BDC1CAFF] rounded-[12px] outline-none hover:border-[#BDC1CAFF] hover:text-[#565D6DFF] focus:border-[#BDC1CAFF] focus:text-[#565D6DFF] disabled:border-[#BDC1CAFF] disabled:text-[#565D6DFF] disabled:bg-white"
        />
      </div>

      {/* Dropdown */}
      <div className="absolute top-[204px] left-[47px] flex flex-col relative">
        <button
          onClick={toggleDropdown}
          className="w-[416px] h-[40px] pl-[12px] pr-[34px] font-inter text-[14px] leading-[22px] font-normal text-[#565D6DFF] bg-white border border-[#BDC1CAFF] rounded-[12px] outline-none relative flex items-center justify-between hover:text-[#565D6DFF] hover:border-[#BDC1CAFF]"
        >
          {selectedOption || "Type of Organization"} {/* placeholder */}
          <span className="absolute right-[12px] top-[12px] w-[16px] h-[16px] border-b-2 border-r-2 border-[#323743FF] transform rotate-45"></span>
        </button>

        {dropdownOpen && (
<ul className="absolute top-full left-0 mt-1 border border-[#BDC1CAFF] rounded-[12px] bg-white w-[81%] z-10">
            {options.map((option, idx) => (
              <li
                key={idx}
                onClick={() => selectOption(option)}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Form1;
