"use client";
import IMG_3164 from "@/public/assets/image/home/IMG_3164.jpeg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { storageCdn } from "@/app/storage/storage";
import { Navigation } from "swiper/modules";

export const Gallery = () => {
  return (
    <section className="bg-white  py-10">
      <div className="container max-w-screen-xl mx-auto ">
        <h1 className="font-semibold text-gray-900 text-4xl text-center mb-10">
          Our Projects
        </h1>

        <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-3 px-1">
          <div className="w-full flex flex-col border border-primary-500 rounded-lg shadow  ">
            <div className="flex lg:h-full w-full">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image
                    src={storageCdn.projects.project10}
                    className="h-full rounded-lg "
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={storageCdn.projects.project11}
                    className="h-full rounded-lg "
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Image
                    src={storageCdn.projects.project12}
                    className="h-full rounded-lg "
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black  ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col border border-primary-500 rounded-lg shadow  ">
            <div className="flex w-full h-full">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <div className="rounded-t-lg h-full flex relative w-full">
                    <Image
                      src={storageCdn.projects.project20}
                      className="w-full h-full "
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="rounded-t-lg h-full flex relative w-full">
                    <Image
                      src={storageCdn.projects.project21}
                      className="w-full h-full "
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="rounded-t-lg h-full flex relative w-full">
                    <Image
                      src={storageCdn.projects.project22}
                      className="w-full h-full "
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black  ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>{" "}
          <div className="w-full flex flex-col border border-primary-500 rounded-lg shadow  ">
            <a href="#">
              <Image className="rounded-t-lg" src={IMG_3164} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black  ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col border border-primary-500 rounded-lg shadow  ">
            <a href="#">
              <Image className="rounded-t-lg" src={IMG_3164} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black  ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
