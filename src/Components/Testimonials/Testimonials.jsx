import React, { useRef } from 'react';
import './Testimonials.css';
import img1 from '../../assets/next_icon.png';
import img2 from '../../assets/back_icon.png';
import user1 from '../../assets/user_1.png';
import user2 from '../../assets/user_2.png';
import user3 from '../../assets/user_3.png';
import user4 from '../../assets/user_4.png';

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){ // Adjusting to accommodate all slides
            tx -= 50;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 50;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials'>
            <img src={img1} alt="Next" className='next-btn' onClick={slideForward}/>
            <img src={img2} alt="Back" className='back-btn' onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>MUGABE Robert</h3>
                                    <span>Kigali, Rwanda</span>
                                </div>
                            </div>
                            <p>“I had the best experience with VolunteerFit. I was able to help the community and make a difference in the world. I recommend this organization to anyone who wants to make a difference.”</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user4} alt="" />
                                <div>
                                    <h3>BAHATI Remmy</h3>
                                    <span>Kigali, Rwanda</span>
                                </div>
                            </div>
                            <p>“I had the best experience with VolunteerFit. 
                                I was able to help the community and make a difference in the world. I recommend this organization to anyone who wants to make a difference.”</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user3} alt="" />
                                <div>
                                    <h3>AKALIZA Amanda</h3>
                                    <span>Kigali, Rwanda</span>
                                </div>
                            </div>
                            <p>“I had the best experience with VolunteerFit. I was able to help the community and make a difference in the world. I recommend this organization to anyone who wants to make a difference.”</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user4} alt="" />
                                <div>
                                    <h3>MUCYO Yves</h3>
                                    <span>Kigali, Rwanda</span>
                                </div>
                            </div>
                            <p>“I had the best experience with VolunteerFit. I was able to help the community and make a difference in the world. I recommend this organization to anyone who wants to make a difference.”</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Testimonials;
