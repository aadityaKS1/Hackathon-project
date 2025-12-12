// import React from 'react'
import { useState, useEffect } from 'react'
import allUpcomingEvents from '../../Data/upcomingEvents';

import React from "react";

const EventCard = ({
  title,
  organization,
  date,
  location,
  image,
  tags = [],
  badge,
}) => {
  return (<>
    <div className="absolute w-[402px] h-[590px] bg-white rounded-[16px] border border-[#DEE1E6FF] shadow-[0px_4px_7px_#171a1f21,0_0_2px_#171a1f14] rounded-xl">
      {/* Image */}
      <img className="absolute top-0 left-0 w-[400px] h-[285px] rounded-t-lg overflow-hidden" src={image} alt={title} />

      <div className="absolute top-[241px] left-[25px] w-[351px] h-[246px] bg-white rounded-[14px] border border-[#BDC1CA] shadow-[0px_0px_1px_#171a1f21,0_0_2px_#171a1f14]">

        {/* Content */}
        <div className="absolute top-[10px] left-[11px] w-[329px] h-[74px] font-poppins leading-[24px] text-[#171A1F]">
          <h2 className="text-[24px] font-bold">{title}</h2>
          <p className="text-[14px] mb-3">{organization}</p>
        </div>

        {/* category tags */}

        <div className="absolute top-[94px] left-[11px] flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-blue-400 text-white font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* highly recommended(ai) */}
        <div className="absolute top-[136px] left-[11px] w-[254px] h-[40px] bg-[#E0ECF8] rounded-xl">
          <p className=' px-[7px] py-[7px] font-inter text-[16px] leading-[26px] font-bold text-[#005EBD] text-left'> Highly Recommended </p>
        </div>

        {/* Apply button */}
        <button
          className="absolute top-[192px] left-[10px] w-[331px] h-[40px] px-[12px] flex items-center justify-center
                font-poppins text-[16px] leading-[26px] font-medium text-white bg-[#004EA8] rounded-xl
                border-0
                hover:bg-[#004EA8] 
                active:bg-[#004EA8] 
                disabled:opacity-40">
          Apply
        </button>

      </div>

      {/* date and location  */}
      <p className="absolute top-[495px] left-[25px] w-[351px] h-[48px] font-poppins text-[18px] leading-[24px] font-normal text-[#171A1F]">
        {date} <br /> {location}
      </p>

    </div>
  </>
  );
};

export default EventCard;

