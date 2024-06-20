import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image, { StaticImageData } from "next/image";

export interface PropsCardSlider {
  images: StaticImageData[];
  content: {
    title: string;
    description: string;
  };
}

export const CardSlider = (props: PropsCardSlider) => {
  const { images, content } = props;
  return (
    <div className="w-full flex flex-col border border-primary-500 rounded-lg shadow  ">
      <div className="flex  h-full w-full relative">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper  h-96  lg:h-full flex"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-t-lg h-full flex relative w-full">
                <Image src={item} alt="item" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black  ">
            {content.title}{" "}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {content.description}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-900 rounded-lg hover:bg-black focus:ring-4 focus:outline-none "
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

 
