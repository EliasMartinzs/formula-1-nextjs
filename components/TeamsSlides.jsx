'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default function TeamsSlides({ team_name }) {
  return (
    <div className="px-2 lg:px-20 mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay
        navigation
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="relative w-full h-96 lg:w-full lg:h-screen">
            <Image
              src={`/../public/${team_name}/1.png`}
              fill
              className="object-cover bg-center"
              alt={team_name}
              loading="lazy"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {' '}
          <div className="relative w-full h-96 lg:w-full lg:h-screen">
            <Image
              src={`/../public/${team_name}/2.png`}
              fill
              className="object-cover bg-center"
              alt={team_name}
              loading="lazy"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {' '}
          <div className="relative w-full h-96 lg:w-full lg:h-screen">
            <Image
              src={`/../public/${team_name}/3.png`}
              fill
              className="object-cover bg-center"
              alt={team_name}
              loading="lazy"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {' '}
          <div className="relative w-full h-96 lg:w-full lg:h-screen">
            <Image
              src={`/../public/${team_name}/4.png`}
              fill
              className="object-cover bg-center"
              alt={team_name}
              loading="lazy"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {' '}
          <div className="relative w-full h-96 lg:w-full lg:h-screen">
            <Image
              src={`/../public/${team_name}/5.png`}
              fill
              className="object-cover bg-center"
              alt={team_name}
              loading="lazy"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {' '}
          <div className="relative w-full h-96 lg:w-full lg:h-screen">
            <Image
              src={`/../public/${team_name}/6.png`}
              fill
              className="object-cover bg-center"
              alt={team_name}
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
