import Heading from './heading';
import { GrGallery } from "react-icons/gr";


const Exhibition = () => {
  return (
    <div className='exhibition__section' id='exhibition'>
        <div className="container exhibition__container">
            <div className="exhibition__head">
                <div className="circle"></div>
                <Heading title={exhibition} icon={<GrGallery />}/>
            </div>
        </div>
    </div>
  )
}

export default Exhibition
