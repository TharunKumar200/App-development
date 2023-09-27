import React from "react";
import "../../assets/css/Volunteer/Explore.css"; // Import your CSS file
import Footer from "../Footer";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/UserSlice";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const orgname = user.user && user.user.email ? user.user.email : "Guest";

  // Define an array of event objects with unique data for each box
  const events = [
    {
      name: "Volunteer Cleanup",
      date: "October 15, 2023",
      location: "City Park",
    },
    {
      name: "Food Drive",
      date: "November 2, 2023",
      location: "Community Center",
    },
    {
      name: "Planting Trees",
      date: "December 10, 2023",
      location: "Local School",
    },
    {
      name: "Homeless Shelter Support",
      date: "January 5, 2024",
      location: "Downtown Shelter",
    },
    {
      name: "Animal Shelter Care",
      date: "February 20, 2024",
      location: "Animal Rescue Center",
    },
    {
      name: "Elderly Home Visit",
      date: "March 15, 2024",
      location: "Sunny Meadows Retirement Home",
    },
    {
      name: "Beach Cleanup",
      date: "April 10, 2024",
      location: "Beachfront",
    },
    {
      name: "Youth Mentorship",
      date: "May 5, 2024",
      location: "Local Community Center",
    },
    {
      name: "Environmental Awareness Workshop",
      date: "June 20, 2024",
      location: "City Library",
    },
  ];

  // Function to handle event enrollment (you can customize this as needed)
  const enrollEvent = (event) => {
    // Add your enrollment logic here
    console.log(`Enrolled in event: ${event.name}`);
  };

  return (
    <div className="explore-container">
      <div className="event-list-org11">
        <h1>For You, {orgname}</h1>
        {/* Render events */}
        <div className="event-boxes">
          {events.map((event, index) => (
            <div className="event-box" key={index}>
              <h2>{event.name}</h2>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <button className="enroll-button" onClick={() => enrollEvent(event)}>
                Enroll
              </button>
            </div>
          ))}
        </div>
      </div>
      <h1 className="more-events"></h1>
      {/* Render more events */}
      <Footer />
    </div>
  );
};

export default Explore;
