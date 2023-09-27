import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/css/Home.css";
import dog from "../assets/css/dog-tina.jpg";
import help from "../assets/css/help.jpg";
import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    function revealElementsOnScroll() {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        if (isElementPartiallyInViewport(element)) {
          element.classList.add("reveal");
        }
      });
    }

    function isElementPartiallyInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }

    window.addEventListener("scroll", revealElementsOnScroll);

    revealElementsOnScroll();

    return () => {
      window.removeEventListener("scroll", revealElementsOnScroll);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="land-text-container">
        <p className="land-welcome animate-on-scroll">
          Where Compassion Meets Action.
        </p>
        <p className="land-subtext animate-on-scroll">
          Join Our Community of Changemakers and Become Part Of a Global Network
        </p>
        <div className="box-container">
          <Link to="/volunteer/login" className="action-box animate-on-scroll">
            <h2 className="box-heading">Volunteer</h2>
            <p className="box-subtext">
              Find volunteering opportunities and enroll for events
            </p>
            <LeftOutlined className="box-icon" />
          </Link>
          <Link to="/org/login" className="action-box animate-on-scroll">
            <h2 className="box-heading">Organize</h2>
            <p className="box-subtext">
              Create and manage events for your organization
            </p>
            <LeftOutlined className="box-icon" />
          </Link>
          <Link to="/about" className="action-box animate-on-scroll">
            <h2 className="box-heading">Learn</h2>
            <p className="box-subtext">
              Explore learning resources and grow your skills
            </p>
            <LeftOutlined className="box-icon" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
