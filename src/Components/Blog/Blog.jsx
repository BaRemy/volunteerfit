import React from 'react'
import './Blog.css'
import blog from '../../assets/blog.jpeg'
import play_icon from '../../assets/play-icon.png'
const Blog = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={blog} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>The Youth in Kigali met with the Minister of ICT</h3>
        <p>VolunteerFit is a platform that connects volunteers with opportunities to volunteer.<p> We believe that everyone has something to offer, and that everyone can make a difference. Our mission is to make it easy for people to find volunteer opportunities that match their skills and interests. </p>Whether you're looking to volunteer in your community, or halfway around the world, VolunteerFit has something for you. Sign up today and start making a difference!</p>
      </div>
      
    </div>
  )
}

export default Blog
