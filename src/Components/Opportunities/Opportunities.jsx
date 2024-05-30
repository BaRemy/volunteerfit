import React from 'react'
import './Opportunities.css';
import opportunity from '../../assets/opportunity.jpg'
import opportunity_1 from '../../assets/opportunity4.jpg'
import opportunity_2 from '../../assets/opportunity2.jpg'
import opportunity_3 from '../../assets/opportunity4.jpg'
import opportunity_4 from '../../assets/opportunity2.jpg'
import opportunity_5 from '../../assets/opportunity.jpg'
const Opportunities = () => {
  return (
    <div className='opportunities'>

      
     <div className="opportunity">
        <img src={opportunity} alt="" />
        <h3>Kigali International Summit</h3>
        <p>The African Union Corps into Union is a flagship initiative of the African Union, embodying the organization's commitment to fostering unity and cooperation across the continent.</p>
        <button className='btn-opportunity'>View Details</button>
        </div>

        <div className="opportunity">
        <img src={opportunity_1} alt="" />
        <h3>Tokyo International Summit</h3>
        
        <p>The African Union Corps into Union is a flagship initiative of the African Union, embodying the organization's commitment to fostering unity and cooperation across the continent.</p>
        <button className='btn-opportunity'>View Details</button>
        </div>
        
        <div className="opportunity">
        <img src={opportunity_2} alt="" />
        <h3>London International Summit</h3>
        <p>The African Union Corps into Union is a flagship initiative of the African Union, embodying the organization's commitment to fostering unity and cooperation across the continent.</p>
        <button className='btn-opportunity'>View Details</button>
        </div> 
        
        <div className="opportunity">
        <img src={opportunity_3} alt="" />
        <h3>Kigali International Summit</h3>
        <p>The African Union Corps into Union is a flagship initiative of the African Union, embodying the organization's commitment to fostering unity and cooperation across the continent.</p>
        <button className='btn-opportunity'>View Details</button>
        </div>

        <div className="opportunity">
        <img src={opportunity_4} alt="" />
        <h3>Kigali International Summit</h3>
        <p>The African Union Corps into Union is a flagship initiative of the African Union, embodying the organization's commitment to fostering unity and cooperation across the continent.</p>
        <button className='btn-opportunity'>View Details</button>
        </div>

        <div className="opportunity">
        <img src={opportunity_5} alt="" />
        <h3>Kigali International Summit</h3>
        <p>The African Union Corps into Union is a flagship initiative of the African Union, embodying the organization's commitment to fostering unity and cooperation across the continent.</p>
        <button className='btn-opportunity'>View Details</button>
        </div>
    </div>
  
  )
}

export default Opportunities
