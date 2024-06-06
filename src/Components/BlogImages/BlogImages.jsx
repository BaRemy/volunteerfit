import React from 'react'
import './BlogImages.css'
import img1 from '../../assets/youth.jpg'
import img2 from '../../assets/youth.jpg'
import img3 from '../../assets/youth.jpg'
import img4 from '../../assets/youth.jpg'
import img5 from '../../assets/dark_arrow.png'
const BlogImages = () => {
  return (
    <div className='field'>
      <div className="gallery">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
      <button className='btn'>See more <img src={img5} alt="" /></button>
    </div>
  )
}

export default BlogImages
