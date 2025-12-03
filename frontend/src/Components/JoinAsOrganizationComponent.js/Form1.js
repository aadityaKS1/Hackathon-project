import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form1() {

     const navigate = useNavigate();
      const handleSignUp = () => {
        // You can also handle form submission or API call here
        navigate("/signup"); // Redirects without reloading
      };
      const handleRegister_volunteer = () => {
        // You can also handle form submission or API call here
        navigate("/register_volunteer"); // Redirects without reloading
      };
      const handleRegister_club = () => {
        // You can also handle form submission or API call here
        navigate("/register_club"); // Redirects without reloading
      };
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [selectedOption, setSelectedOption] = useState(""); // start empty
    const [selectedCategories, setSelectedCategories] = useState([]);


    const options = ["NGO", "INGO"];

    const categories = [
        "Education",
        "Social Service",
        "Animal Care",
        "Fellowship",
        "Other",
    ];

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleDropdown2 = () => setDropdownOpen2(!dropdownOpen2);

    const selectOption = (option) => {
        setSelectedOption(option);
        setDropdownOpen(false);
    };


    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(
                selectedCategories.filter((item) => item !== category)
            );
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };


    return (
        <div className="absolute top-[581px] left-1/2 transform -translate-x-1/2 w-[512px] h-[801px] bg-[#F8F9FAFF] rounded-[14px] shadow-[0_25px_50px_rgba(0,0,0,0.25)]">

            <p className="absolute top-[15px] left-[189px] font-poppins text-[24px] leading-[32px] font-bold text-[#171A1FFF]">
                Get Started
            </p>

            {/* Toggle Buttons */}
            <div className="absolute top-[58px] left-[19px] w-[471px] h-[45px] bg-[#DEE1E6FF] rounded-[20px]"></div>
            <button className="absolute top-[62px] left-[24px] w-[229px] h-[36px] px-[12px] flex items-center justify-center font-inter text-[14px] leading-[22px] font-normal text-[#323743FF] bg-[#DEE1E6FF] rounded-[16px] disabled:opacity-40" onClick={handleRegister_volunteer}>
                Volunteer
            </button>
            <button className="absolute top-[62px] left-[256px] w-[229px] h-[36px] px-[12px] flex items-center justify-center font-inter text-[14px] leading-[22px] font-normal text-white bg-[#4A90E2FF] rounded-[16px] hover:bg-[#3181DDFF] active:bg-[#2272CEFF] disabled:opacity-40" onClick={handleRegister_club}>
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
                    className="w-[416px] h-[40px] pl-[14px] pr-[12px] font-inter text-[14px] leading-[22px] font-normal bg-white border border-[#BDC1CAFF] rounded-[12px] outline-none hover:border-[#BDC1CAFF] hover:text-[#565D6DFF] focus:border-[#BDC1CAFF] focus:text-[#565D6DFF] disabled:border-[#BDC1CAFF] disabled:text-[#565D6DFF] disabled:bg-white"
                />
            </div>

            {/* Dropdown */}
            <div className="absolute top-[204px] left-[47px] flex flex-col relative">
                <button
                    onClick={toggleDropdown}
                    className="w-[416px] h-[40px] pl-[12px] pr-[34px] font-inter text-[14px] leading-[22px] font-normal text-[#565D6DFF] bg-white border border-[#BDC1CAFF] rounded-[12px] outline-none relative flex items-center justify-between hover:text-[#565D6DFF] hover:border-[#BDC1CAFF]"
                >
                    {selectedOption || "Type of Organization"} {/* placeholder */}
                    <span className="absolute right-[15px] top-[14px] w-[8px] h-[8px] border-b-2 border-r-2 border-[#323743FF] transform rotate-45"></span>
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
            <div className="absolute top-[310px] left-[47px] w-[416px]">
                {/* Button showing selected categories */}
                <button
                    onClick={() => setDropdownOpen2(!dropdownOpen2)}
                    className="w-full h-[40px] pl-[12px] pr-[12px] font-inter text-[14px] leading-[22px] font-normal
                   text-[#565D6DFF] bg-white border border-[#BDC1CAFF] rounded-[12px] outline-none flex items-center justify-between overflow-hidden"
                >
                    <span className="truncate">
                        {selectedCategories.length > 0
                            ? selectedCategories.join(", ")
                            : "Select categories"}
                    </span>
                    <span className="ml-2">&#9662;</span>
                </button>

                {/* Dropdown with checkboxes */}
                {dropdownOpen2 && (
                    <div className="mt-2 w-full border border-[#BDC1CAFF] rounded-[12px] bg-white max-h-40 overflow-y-auto z-50 relative">
                        {categories.map((category) => (
                            <label
                                key={category}
                                className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
                            >
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-[#4A90E2FF]"
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => toggleCategory(category)}
                                />
                                <span className="text-[#565D6DFF] font-inter text-[14px]">
                                    {category}
                                </span>
                            </label>
                        ))}
                    </div>
                )}
            </div>
            <div className="absolute top-[375px] left-[47px] opacity-100 w-[416px]">
                <input
                    type="text"
                    placeholder="Organization Email"
                    className="w-full h-[40px] pl-[14px] pr-[12px] font-inter text-[14px] leading-[22px] font-normal
                   bg-white border border-[#BDC1CAFF] rounded-[12px] outline-none
                   hover:border-[#BDC1CAFF] hover:text-[#565D6DFF]
                   focus:border-[#BDC1CAFF] focus:text-[#565D6DFF]
                   disabled:border-[#BDC1CAFF] disabled:text-[#565D6DFF] disabled:bg-white"
                />

            </div>
            <div className="absolute top-[441px] left-[47px] opacity-100 w-[416px]">
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full h-[40px] pl-[14px] pr-[12px] font-inter text-[14px] leading-[22px] font-normal
                   bg-white border border-[#BDC1CAFF] rounded-[12px] outline-none
                   hover:border-[#BDC1CAFF] hover:text-[#565D6DFF]
                   focus:border-[#BDC1CAFF] focus:text-[#565D6DFF]
                   disabled:border-[#BDC1CAFF] disabled:text-[#565D6DFF] disabled:bg-white"
                />

            </div>
            <div className="absolute top-[511px] left-[47px] opacity-100 w-[416px]">
                <input
                    type="text"
                    placeholder="Password"
                    className="w-full h-[40px] pl-[14px] pr-[12px] font-inter text-[14px] leading-[22px] font-normal
                   bg-white border border-[#BDC1CAFF] rounded-[12px] outline-none
                   hover:border-[#BDC1CAFF] hover:text-[#565D6DFF]
                   focus:border-[#BDC1CAFF] focus:text-[#565D6DFF]
                   disabled:border-[#BDC1CAFF] disabled:text-[#565D6DFF] disabled:bg-white"
                />

            </div>
            <div className="absolute top-[579px] left-[47px] opacity-100 w-[416px]">
                <input
                    type="text"
                    placeholder="Confirm Password"
                    className="w-full h-[40px] pl-[14px] pr-[12px] font-inter text-[14px] leading-[22px] font-normal
                   bg-white border border-[#BDC1CAFF] rounded-[12px] outline-none
                   hover:border-[#BDC1CAFF] hover:text-[#565D6DFF]
                   focus:border-[#BDC1CAFF] focus:text-[#565D6DFF]
                   disabled:border-[#BDC1CAFF] disabled:text-[#565D6DFF] disabled:bg-white"
                />

            </div>
            {/* Submit Button */}
<div className="absolute top-[645px] left-[47px] w-[416px]">
  <button
    className="w-full h-[40px] px-[12px] flex items-center justify-center
               font-inter text-[14px] leading-[22px] font-medium text-white
               bg-[#4A90E2FF] rounded-[12px] border-0
               hover:bg-[#3181DDFF] active:bg-[#2272CEFF] disabled:opacity-40"
  >
    Sign Up
  </button>
</div>

{/* Secondary Button */}
<div className="absolute top-[695px] left-[171px] w-[170px]">
  <button
    className="w-full h-[40px] px-[12px] flex items-center justify-center
               font-inter text-[14px] leading-[22px] font-medium
               text-[#4A90E2FF] bg-transparent border-0 rounded-[12px]
               hover:text-[#4A90E2FF] hover:bg-transparent
               active:text-[#4A90E2FF] active:bg-transparent
               disabled:opacity-40"
               onClick={handleRegister_volunteer}
  >
    Sign up as Volunteer
  </button>
</div>

<div className="flex gap-2">

    <p className="absolute top-[740px] left-[144px] font-inter text-[14px] leading-[20px] font-normal text-[#565D6DFF]">
  Already have an account? 
</p>
<button
  className="absolute top-[740px] left-[317px] w-[76px] h-[22px] px-[12px] 
             font-inter text-[14px] leading-[22px] font-medium text-[#4A90E2FF] bg-transparent
             rounded-[10px] hover:text-[#4A90E2FF] active:text-[#4A90E2FF] disabled:opacity-40"
             onClick={handleSignUp}
>
  Sign In
</button>

</div>
        </div>
    );
}

export default Form1;
