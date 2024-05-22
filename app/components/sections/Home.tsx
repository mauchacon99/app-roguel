import Logo1 from "@/public/assets/image/navbar-logo1.png";
import IMG_3164 from "@/public/assets/image/home/IMG_3164.jpeg";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export const Home = () => {
  return (
    <div className="bg-white py-10 md:py-16 ">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="mt-16 md:mt-28 text-center xl:text-left">
          <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-normal mb-6">
            Quality Construction <br />
            Guaranteed
          </h1>

          <p className="font-normal text-xl text-gray-400 leading-relaxed mb-12">
            We Specialize in Interior and Exterior Business and home
            Renovations,
            <br />
            Including Bathroom and kitchen remodeling, garages and more!
          </p>

          <button className="px-6 py-4 bg-primary-600 text-white font-semibold text-lg rounded-xl hover:bg-primary-900 transition ease-in-out duration-500">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};
