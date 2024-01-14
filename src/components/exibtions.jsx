import React from 'react'

const Exibtions = ({first, second}) => {
  return (
    <div className="exhibitions__container">
        <img src={first} alt="image" className='exhibitions__image-one' />
        <img src={second} alt="image" className='exhibitions__image-two' />
    </div>
  )
}

export default Exibtions
