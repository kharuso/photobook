import React from 'react'

const Heading = ({icon, title}) => {
  return (
    <div className='heading__container'>
      <h1>{title}</h1>
      <span>{icon}</span>
    </div>
  )
}

export default Heading
