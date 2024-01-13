import React from 'react'
import Frame from '../frame';
import First from '../../images/1.jpg'
import Second from '../../images/25.jpg'
import './header.css'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="left__section">
            <Frame first={First} second={Second}/>
        </div>
        <div className="right__section">
            <div className="header__head">
                <div className="circle"></div>
                <span>#Love Of My Life</span>
            </div>
            <h1>to the most beautiful girl in the world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reiciendis eos commodi velit cumque! Laborum voluptatibus a obcaecati nihil sit.</p>
        </div>
      </div>
    </header>
  )
}

export default Header;
