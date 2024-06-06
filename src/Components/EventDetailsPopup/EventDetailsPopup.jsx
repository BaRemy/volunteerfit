import React from 'react';
import './EventDetailsPopup.css';
import menu from '../../assets/cross-icon.png';

const EventDetailsPopup = ({ setShowEventDetails, eventDetails }) => {
  return (
    <div className='event-details-popup'>
      <div className='event-details-popup-container'>
        <div className='event-details-popup-title'>
          <h2>{eventDetails.title}</h2>
          <img onClick={() => setShowEventDetails(false)} src={menu} alt="Close" />
        </div>
        <div className='event-details-content'>
          <div className='event-details-info'>
            <p>
            <b>Event Name: </b>Kigali International Summit 2024 <br />
                <b>Event Date and Time:</b>20th, May, 2024  7:00PM <br />
                 <b>Event Location: </b>.Kigali Convention Centre, Kigali, Rwanda <br />
                  <b>Purpose of the Event:</b>
                  To bring together global leaders, innovators, and experts to discuss and address critical issues related to sustainable development, technology, and international cooperation.
                  <br />
                  <b>Target Audience:</b> 
                  Government officials, industry leaders, academics, non-profit organizations, and media representatives.
                  <br />
                  <b>Expected Number of Attendees:</b> <br />
                  500-1000 participants:
                  <br />
                  <b>Budget:</b> 1 Million Dollars


            </p>
            <button onClick={eventDetails.onVolunteer} className='btn-volunteer'>Volunteer</button>
          </div>
          <div className='event-details-image'>
            <img src={eventDetails.image} alt={eventDetails.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPopup;
