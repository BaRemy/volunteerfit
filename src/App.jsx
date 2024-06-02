import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Opportunities from './Components/Opportunities/Opportunities';
import Title from './Components/Title/Title';
import Blog from './Components/Blog/Blog';
import BlogImages from './Components/BlogImages/BlogImages';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import LoginPopup from './Components/LoginPopup/LoginPopup';
import EventDetailsPopup from './Components/EventDetailsPopup/EventDetailsPopup';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div>
        <div id="home">
          <Navbar setShowLogin={setShowLogin} />
          <Hero />
        </div>
        <div id="opportunities" className="container">
          <Title subtitle='Explore the world of Opportunities' />
          <Opportunities />
        </div>
        <div id="blog" className="container">
          <Title subtitle='Discover the Latest News From Our Blog Channel' />
          <Blog />
        </div>
        <div id="about" className="container">
          <Title subtitle='Check out the previous events photos' />
          <BlogImages />
          <Title subtitle='What our Volunteers Say!' />
          <Testimonials />
        </div>
        <div id="contact" className="container">
          <Title subtitle='Reach to Us!' />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
