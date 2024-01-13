import './gallery.css'
import Heading from '../heading';
import { LuGalleryHorizontalEnd } from "react-icons/lu";



const gallery = () => {
  return (
    <div className="gallery__section" id='gallery'>
      <div className="container gallery__container">
        <div className="gallery__head">
          <div className="circle"></div>
          <Heading icon={<LuGalleryHorizontalEnd />} title="gallery" />
        </div>
      </div>
    </div>
  )
}

export default gallery
