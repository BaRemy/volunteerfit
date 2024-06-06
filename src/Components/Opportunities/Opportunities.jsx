import React, { useState } from 'react';
import './Opportunities.css';
import opportunity from '../../assets/opportunity.jpg';
import opportunity_1 from '../../assets/opportunity4.jpg';
import opportunity_2 from '../../assets/opportunity2.jpg';
import opportunity_3 from '../../assets/opportunity4.jpg';
import opportunity_4 from '../../assets/opportunity2.jpg';
import opportunity_5 from '../../assets/opportunity.jpg';
import EventDetailsPopup from '../EventDetailsPopup/EventDetailsPopup';
import LoginPopup from '../LoginPopup/LoginPopup';

const Opportunities = () => {
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [eventDetails, setEventDetails] = useState({});
  const [showLogin, setShowLogin] = useState(false);

  const opportunities = [
    {
      image: opportunity,
      title: 'Kigali International Summit',
      description: 'The African Union Corps into Union is a flagship initiative of the African Union, embodying the organization\'s commitment to fostering unity and cooperation across the continent.'
    },
    {
      image: opportunity_1,
      title: 'Tokyo International Summit',
      description: 'The African Union Corps into Union is a flagship initiative of the African Union, embodying the organization\'s commitment to fostering unity and cooperation across the continent.'
    },
    {
      image: opportunity_2,
      title: 'London International Summit',
      description: 'The African Union Corps into Union is a flagship initiative of the African Union, embodying the organization\'s commitment to fostering unity and cooperation across the continent.'
    },
    {
      image: opportunity_3,
      title: 'Kigali International Summit',
      description: 'The African Union Corps into Union is a flagship initiative of the African Union, embodying the organization\'s commitment to fostering unity and cooperation across the continent.'
    },
    {
      image: opportunity_4,
      title: 'Kigali International Summit',
      description: 'The African Union Corps into Union is a flagship initiative of the African Union, embodying the organization\'s commitment to fostering unity and cooperation across the continent.'
    },
    {
      image: opportunity_5,
      title: 'Kigali International Summit',
      description: 'The African Union Corps into Union is a flagship initiative of the African Union, embodying the organization\'s commitment to fostering unity and cooperation across the continent.'
    }
  ];

  const handleViewDetails = (opportunity) => {
    console.log('View Details Clicked'); // Debugging
    console.log('Opportunity:', opportunity); // Debugging
    setEventDetails({
      ...opportunity,
      onVolunteer: () => {
        setShowEventDetails(false);
        setShowLogin(true);
      }
    });
    setShowEventDetails(true);
  };

  return (
    <div className='opportunities'>
      {opportunities.map((opportunity, index) => (
        <div key={index} className="opportunity">
          <img src={opportunity.image} alt={opportunity.title} />
          <h3>{opportunity.title}</h3>
          <p>{opportunity.description}</p>
          <button className='btn-opportunity' onClick={() => handleViewDetails(opportunity)}>View Details</button>
        </div>
      ))}
      {showEventDetails && (
        <EventDetailsPopup 
          setShowEventDetails={setShowEventDetails} 
          eventDetails={eventDetails} 
        />
      )}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    </div>
  );
};

export default Opportunities;
