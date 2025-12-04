import React from "react";
import img1 from "../../Assets/homepage_image/img1.jpeg";

const Search = () => {
    return (
        <>
            <div className="absolute top-[70px] left-0 flex items-center justify-center w-full h-[620px] bg-white rounded-md shadow-[0_0_1px_rgba(23,26,31,0.87),0_0_2px_rgba(23,26,31,0.08)]">

                <img class="absolute top-0 left-0 w-full h-[620px] rounded-none" src={img1} alt="Homepage Image" />

                <div class="absolute top-0 left-0 w-full h-[620px] rounded-none bg-gradient-to-t from-[#5BC0DE] to-[#5A86DD] opacity-50"></div>

                <h1 class="absolute top-[165px] w-[969px] font-poppins text-[64px] text-center leading-[84px] font-bold text-white">
                    Connect Skills With Meaningful Impacts
                </h1>

                <p class="absolute top-[338px] font-inter text-[32px] leading-[48px] font-normal text-white">
                    AI-powered matching for skilled volunteers and organizations
                </p>

                <div className="absolute top-[420px] w-[274px] flex items-center justify-between" >
                    <button
                        class="absolute w-[152px] h-[36px] px-3 font-inter text-[14px] text-center leading-[22px] font-bold text-[#3D709A] bg-[#F0F5F9] rounded-[22px] shadow-[0_8.5px_13.75px_rgba(23,26,31,0.22),0_0_2px_rgba(23,26,31,0.08)]
                    hover:bg-[#C9DBEA]
                    active:bg-[#A2C1DA] 
                    disabled:opacity-40 gap-[18px]"> 
                        Explore Events
                    </button>

                    <button
                        class="absolute left-[170px] w-[104px] h-[36px] px-3 font-inter text-[14px] text-center leading-[22px] font-bold text-white bg-[#004492] rounded-[22px] shadow-[0_8.5px_13.75px_rgba(23,26,31,0.22),0_0_2px_rgba(23,26,31,0.08)] 
                    hover:bg-[#004492] 
                    active:bg-[#004492] 
                    disabled:opacity-40">
                        Join Us
                    </button>
                </div>



            </div>
        </>
    )
}

export default Search
