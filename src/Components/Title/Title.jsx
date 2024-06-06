import React from 'react'
import './Title.css'

const Title = ({subtitle}) => {
  return (
    <div className='title'>
      <h1>{subtitle}</h1>
    </div>
  )
}

export default Title
