"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { galleryTop, galleryBottom } from "@/content/family";
import type { FamilyPhoto } from "@/content/types";

const SLIDES_PER_VIEW = 3;

function Row({ photos, reverse }: { photos: FamilyPhoto[]; reverse?: boolean }) {
  return (
    <Swiper
      slidesPerView={SLIDES_PER_VIEW}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false, reverseDirection: reverse }}
      modules={[Autoplay]}
      className="w-full"
    >
      {photos.map((image) => (
        <SwiperSlide key={image.src}>
          <div className="relative w-full overflow-hidden aspect-[4/3]">
            <Image
              src={image.src}
              fill
              sizes={`${Math.round(100 / SLIDES_PER_VIEW)}vw`}
              alt={image.alt}
              className="rounded-md object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function AutoSlidingGallery() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Row photos={galleryTop} />
      <Row photos={galleryBottom} reverse />
    </div>
  );
}
