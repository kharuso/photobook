import Heading from '../heading';
import './exhibition.css'
import { BiSolidSlideshow } from "react-icons/bi";
import one from '../../images/1.jpg';
import two from '../../images/2.jpg';
import three from '../../images/3.jpg';
import four from '../../images/4.jpg';
import five from '../../images/5.jpg';
import Exibitions from '../exibtions' 



const Exhibition = () => {
  return (
    <div className='exhibition__section' id='exhibition'>
        <div className="container exhibition__container">
            <div className="exhibition__head">
                <Heading title="exhibition" icon={<BiSolidSlideshow />}/>
                <div className="circle"></div>
            </div>
            <div className="exhibition__section-container">
                <Exibitions first={one} second={one}/>
                <Exibitions first={two} second={two}/>
                <Exibitions first={three} second={three}/>
                <Exibitions first={four} second={four}/>
                <Exibitions first={five} second={five}/>
            </div>
        </div>
    </div>
  )
}

export default Exhibition
