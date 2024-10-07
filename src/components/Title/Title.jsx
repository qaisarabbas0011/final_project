import React from 'react'
import './Title.css'
const Title = (props) => {
  return (
    <div className='title'>
      <p>{props.title}</p>
     <h2>{props.subTitle}</h2>
    </div>
  )
}

export default Title
