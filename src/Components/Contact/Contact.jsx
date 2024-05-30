import React from 'react'
import './Contact.css'
import icon from '../../assets/message_icon.png'
import icon1 from '../../assets/mail-icon.png'
import icon2 from '../../assets/phone-icon.png'
import icon3 from '../../assets/location-icon.png'
import icon4 from '../../assets/dark_arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5c484c94-e5b0-4a9f-8531-f7163de1de54");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Message Submitted Successfully");
        event.target.reset();

      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };




  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={icon} alt="" /></h3>
        <p>Have any questions or concerns? Send us a message and we will get back to you as soon as possible.</p>
        <ul>
          <br /><br /><br /><br /><br /><br />
            <li> <img src={icon1} alt="" />volunteerfit@alx.dev</li>
            <li> <img src={icon2} alt="" />+250 788-432-131</li>
            <li><img src={icon3} alt="" />KK 737 St, Kigali <br /> Rwanda</li>
        </ul>
      </div>
      <div className="contact-col1">
        <form onSubmit={onSubmit}>
            <label>Your Names:</label>
            <input type="text" name='name' placeholder='Your names' required/>
            <label>Your Email:</label>
            <input type="email" name='email' placeholder='Your Email' required/>
            <label>Your Phone Number:</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Your Message Here:</label>
            <textarea name='message' rows="6" placeholder='Enter your Message here.' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit <img src={icon4} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
