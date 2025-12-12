import React from 'react'

const AdvancedFilters = () => {
  return (
    <>
      <div className="absolute top-[117] left-[62] w-[1313px] h-[90px] bg-[#F8F9FA] rounded-[16px]">
        <div className="absolute top-[3px] left-[45px] w-[508px] h-[87px] bg-transparent rounded-none">
          <div className="absolute top-0 left-[2px] font-poppins text-[18px] leading-[28px] font-normal text-[#171A1F]">Advanced Filters</div>

          {/* search by category */}
          <div className="absolute top-[30px] left-[2px] opacity-100">
            <input placeholder='Search By Category (e.g. Education)'
              className="w-[508px] h-[40px] pl-3 pr-[34px] font-inter text-[14px] leading-[22px] font-normal bg-white rounded-tl-[6px] rounded-bl-[6px] border border-[#BDC1CA] outline-none hover:border-[#A8ADB7] focus:border-[#9095A1] disabled:border-[#BDC1CA] disabled:text-[#BDC1CA]"
            /></div>

        </div>

        <div className="absolute top-[3px] left-[642px] w-[271px] h-[87px] bg-transparent rounded-none">
          <div className="absolute top-0 left-[2px] font-poppins text-[18px] leading-[28px] font-normal text-[#171A1F]"></div>

          {/* search by location */}
          <div className="absolute top-[32px] left-0 opacity-100">
            <input placeholder='Search by Location'
              className="w-[270px] h-[40px] pl-[34px] pr-3 font-poppins text-[14px] leading-[22px] font-normal bg-white rounded border border-[#DEE1E6] outline-none hover:border-[#DEE1E6] focus:border-[#DEE1E6] disabled:border-[#DEE1E6] disabled:text-[#BDC1CA] placeholder:text-[#BDC1CA]"
            />
            {/* <svg className="absolute top-[12px] right-[12px] w-4 h-4 fill-[#565D6D]"></svg> */}
          </div>

        </div>

        <div className="absolute top-0 left-[999px] w-[270px] h-[97px] bg-transparent rounded-none">
          <div className="absolute top-[3px] left-0 w-[212px] font-poppins text-[18px] leading-[28px] font-normal text-[#171A1F]"></div>

          {/* search by organization */}
          <div className="absolute top-[35px] left-0 opacity-100">
            <input className="w-[270px] h-[40px] pl-[34px] pr-3 font-poppins text-[14px] leading-[22px] font-normal bg-white rounded border border-[#DEE1E6] outline-none hover:border-[#DEE1E6] focus:border-[#DEE1E6] disabled:border-[#DEE1E6] disabled:text-[#BDC1CA] placeholder:text-[#BDC1CA]" />

            {/* <svg className="absolute top-[12px] right-[12px] w-4 h-4 fill-[#565D6D]"></svg> */}
          </div>

        </div>
      </div>

    </>
  )
}

export default AdvancedFilters
