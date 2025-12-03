import React from 'react'

function Container1() {
    return (
        <div className="relative top-[52px] w-full h-[1282px] bg-transparent">

            {/* Background Container */}
            <div className="relative w-full h-[750px] bg-gradient-to-b from-[#00000000] to-[#00000066] flex flex-col items-center">

                {/* Title */}
                <h1 className="absolute top-[327px] font-poppins text-[48px] leading-[48px] font-extrabold text-black text-center">
                    Create Impact with Your Organization
                </h1>

                {/* Subtitle */}
                <p className="absolute top-[403px] font-poppins text-[20px] leading-[28px] font-normal text-[#007FFFFF] text-center">
                    Transform communities through organized volunteer efforts
                </p>

            </div>
        </div>
    )
}

export default Container1
