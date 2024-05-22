import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import Image2 from "@/public/assets/image/home/IMG_3153.jpeg";
export const Feature = () => {
  return (
    <section className="bg-white py-10 md:py-16 xl:relative">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col xl:flex-row justify-end md:space-x-10 ">
          <div className="md:flex h-full w-1/2 hidden ">
            <Image src={Image2} alt="Logo img" />
          </div>

          <div className="">
            <h1 className="font-semibold text-gray-900  text-4xl text-center leading-normal mb-6">
              We work with different types of remodeling.
            </h1>

            <p className="font-normal text-gray-400 text-md md:text-xl text-center mb-16">
              We offer a wide selection of remodeling types for your home and
              <br /> you are free to choose the designs you want.
            </p>

            <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-10 lg:mb-20">
              <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                <FeatherIcon
                  icon="check-circle"
                  className="text-primary-900"
                ></FeatherIcon>
              </div>

              <div className="text-center md:text-left">
                <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                  A better home for your family
                </h4>
                <p className="font-normal text-gray-400 text-xl leading-relaxed">
                  Porcelain tile installation for your home.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-10 lg:mb-20">
              <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                <FeatherIcon
                  icon="lock"
                  className="text-primary-900"
                ></FeatherIcon>
              </div>

              <div className="text-center md:text-left">
                <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                  Safe Transaction
                </h4>
                <p className="font-normal text-gray-400 text-xl leading-relaxed">
                  Your transactions will always be kept confidential <br /> and
                  will get discounted
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4">
              <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                <FeatherIcon
                  icon="credit-card"
                  className="text-primary-900"
                ></FeatherIcon>
              </div>

              <div className="text-center md:text-left">
                <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                  Low and Cost Home Taxes
                </h4>
                <p className="font-normal text-gray-400 text-xl leading-relaxed">
                  By buying a house from D’house, you will get a tax <br />{" "}
                  discount
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* container.// */}
    </section>
  );
};
