import React from 'react'


const Frame = ({first, second}) => {
  return (
        <div className="frame">
            <div className="background"></div>
            <img src={first} alt="image" className="first__img" />
            <img src={second} alt="image" className="second__img" />
        </div>
  )
}

export default Frame
