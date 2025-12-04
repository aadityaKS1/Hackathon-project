import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Search from "../Components/homeSearch/Search";
import UpcomingEvents from "../Components/UpcomingEvents/UpcomingEvents";
import showMore from '../Components/showMore';

function Home() {
    return (<>
        <Navbar />
        <Search />
        <h1 className="absolute top-[735px] left-[75px] font-poppins text-[32px] leading-[48px] font-bold text-[#171A1F]">
            Upcoming Events
        </h1>
        <UpcomingEvents className="absolute top-[800px]"/>

        {/* show more button  */}
        <showMore />
        <Footer />
    </>
    )
}



export default Home
