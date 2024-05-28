import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const HeroSection = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full max-h-[80vh] min-h-[80vh] mx-auto"
      >
        <SwiperSlide className="flex justify-center items-center text-center text-xl bg-white relative">
          <img
            className="w-full h-full object-cover"
            src="https://img.freepik.com/free-vector/promotion-fashion-banner_1188-201.jpg?t=st=1716750103~exp=1716753703~hmac=1fcd73ed2e350519ca62e05c3dc24f21c680c6521930c0b4ba99901196507e41&w=900"
          />
          <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] flex gap-5">
            <button className="btn btn-outline">Explore More</button>
            <button className="btn btn-neutral">All products</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-xl bg-white">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-xl bg-white">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-xl bg-white">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-xl bg-white">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-xl bg-white">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-xl bg-white">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-xl bg-white">
          Slide 8
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-xl bg-white">
          Slide 9
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
