import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import restaurantFoodImage from '../assets/headerimg.jpg';
import WeekSpecials from './WeekSpecials';
import Testimonials from './Testimonials';
import OurStory from './Footer';

const Home = () => {
  return (
    <>
    <header className="header">
      <div className="container">
        <div className="header-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Timeless Flavors, Modern Elegance: Rediscover Mediterranean Cuisine with a Contemporary Touch!
          </p>
          <Link className="button-primary" to="/bookings">
            Reserve a table
          </Link>
        </div>
        <img 
          className="header-image" 
          src={restaurantFoodImage} 
          alt="Restaurant food" 
        />
      </div>
    </header>
    <WeekSpecials/>
    <Testimonials/>
    <OurStory/>
    </>
  );
};

export default Home;
