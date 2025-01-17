import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay styles

import './Swiper1.css';

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay module
import { carosel } from '../../utils/static_data';
import ProjectCarouse from "../home/ProjectCarouse";

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}  // Add Autoplay to modules
        className="swiper-container"
        autoplay={{
          delay: 3000, // Set the delay to 3000ms (3 seconds)
          disableOnInteraction: false, // Prevent the autoplay from stopping if the user interacts with the swiper
        }}
        loop={true}  // Enable infinite loop for the slides
      >
        {carosel.map((item, index) => (
          <SwiperSlide key={item.id} virtualIndex={index}>
            <ProjectCarouse item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
