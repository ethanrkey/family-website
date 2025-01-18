"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const topPhotos = [
    { src: "/family1.jpg", width: 600, height: 800 },
    { src: "/family3.jpg", width: 1000, height: 800 },
    { src: "/family4.jpg", width: 600, height: 800 },
    { src: "/family5.jpg", width: 500, height: 800 },
];

const bottomPhotos = [
    { src: "/family6.jpg", width: 1000, height: 800 },
    { src: "/family7.jpg", width: 600, height: 800 },
    { src: "/family9.jpg", width: 600, height: 800 },
    { src: "/family8.jpg", width: 600, height: 800 },
    { src: "/family10.jpg", width: 600, height: 800 },
];

export default function AutoSlidingGallery() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Top Row (scrolling left) */}
      <Swiper
        slidesPerView={3} // Show 3 images at a time
        spaceBetween={30} // Space between images
        loop={true} // Infinite looping
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3 sec
        modules={[Autoplay]}
        className="w-full"
      >
        {topPhotos.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full" style={{ aspectRatio: "4 / 3", overflow: "hidden" }}>
              <Image
                src={image.src}
                fill
                alt="Top Image"
                className="rounded-md object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Row (scrolling right) */}
      <Swiper
        slidesPerView={3} // Show 3 images at a time
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false, reverseDirection: true }} // Reverse for bottom row
        modules={[Autoplay]}
        className="w-full"
      >
        {bottomPhotos.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full" style={{ aspectRatio: "4 / 3", overflow: "hidden" }}>
              <Image
                src={image.src}
                fill
                alt="Bottom Image"
                className="rounded-md object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
