import React from "react";
import EventCard from "../eventCard/eventCard";
import allUpcomingEvents from "../../Data/upcomingEvents";

const UpcomingEvents = () => {
  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-8 align-center justify-center">
        {allUpcomingEvents
          .filter(event => event.show)
          .slice(0, 3)
          .map(event => (
            <div key={event.id} className="w-[400px]">
              <EventCard {...event} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
