import React from 'react'
import Navbar from '../Components/Navbar'
import UpcomingEvents from "../Components/UpcomingEvents/UpcomingEvents"
import AdvancedFilters from "../Components/advanceFilter/advancedFilters"
import Footer from '../Components/Footer';
import showMore from '../Components/showMore';

function Events() {
    return (
        <>
            <Navbar />
            <AdvancedFilters />
            <div className="font-poppins text-[32px] leading-[48px] font-bold text-[#171A1F]"></div>

            <UpcomingEvents />

            <showMore />

            <Footer />
        </>
    )
}

export default Events
