import './gallery.css';
import one from '../../images/1.jpg';
import two from '../../images/2.jpg';
import three from '../../images/3.jpg';
import four from '../../images/4.jpg';
import five from '../../images/5.jpg';
import Heading from '../heading';
import { LuGalleryHorizontalEnd } from "react-icons/lu";
import { Navigation, Pagination,  A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const gallery = () => {
  return (
    <div className="gallery__section" id='gallery'>
      <div className="container gallery__container">
        <div className="gallery__head">
          <Heading icon={<LuGalleryHorizontalEnd />} title="gallery" />
          <div className="circle"></div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className='swiper__container'
          
        >
          <SwiperSlide><img src={one} alt="image" className='swiper__image'/></SwiperSlide>
          <SwiperSlide><img src={two} alt="image" className='swiper__image'/></SwiperSlide>
          <SwiperSlide><img src={three} alt="image" className='swiper__image'/></SwiperSlide>
          <SwiperSlide><img src={four} alt="image" className='swiper__image'/></SwiperSlide>
          <SwiperSlide><img src={five} alt="image" className='swiper__image'/></SwiperSlide>
        
        </Swiper>
      </div>
    </div>
  )
}

export default gallery
