import Heading from "../heading";
import { GiCrownedHeart } from "react-icons/gi";
import First from '../../images/3.jpg';
import Second from '../../images/26.jpg';
import Frame from '../frame.jsx'
import './about.css'

const About = () => {
  return (
    <div className="about__section" id="about">
      <div className="container about__container">
        <div className="about__left-section">
            <div className="section__head">
                <Heading icon={<GiCrownedHeart /> } title="about falinyi"/>
                <div className="circle"></div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, odit quas possimus minima repellendus quaerat nesciunt molestias odio officiis tenetur voluptate nulla qui neque.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam soluta in dolorum a, labore repellat asperiores qui itaque corporis voluptas aut nesciunt, deserunt commodi amet quia odio ut? Quas est totam libero consectetur perspiciatis provident.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="about__right-section">
            <Frame first={First} second={Second} />
        </div>

      </div>
    </div>
  )
}

export default About
