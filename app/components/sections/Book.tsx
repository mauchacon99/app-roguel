import FeatherIcon from "feather-icons-react";

export const Book = () => {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4  ">
        <div className="bg-black flex flex-col justify-between lg:flex-row items-center w-full lg:justify-around py-14 rounded-3xl px-4">
          <div className="text-center lg:text-left mb-10 lg:mb-0  ">
            <h1 className="font-semibold text-primary-700 text-4xl md:text-5xl lg:text-7xl leading-normal mb-4">
              Talk to us <br /> to discuss
            </h1>

            <p className="font-normal text-white text-md md:text-xl">
              Need more time to discuss? Won’t worry, we are <br /> ready to
              help you. You can fill in the column on the <br /> right to book a
              meeting with us. Totally free.
            </p>
          </div>

          <div className="hidden xl:block xl:absolute right-0">
            <img src="assets/image/book.png" alt="Image" />
          </div>

          <div className="flex bg-white w-full md:w-1/2 md:px-4 flex-col  px-2 py-3 rounded-3xl  ">
            <div className="py-3">
              <h3 className="font-semibold text-gray-900 text-3xl">
                Book a meeting
              </h3>
            </div>

            <div className="py-3">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />
            </div>

            <div className="py-3">
              <input
                type="text"
                placeholder="Email"
                className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />
            </div>

            <div className="py-3">
              <input
                type="text"
                placeholder="Date"
                className="px-4 py-4 w-full bg-gray-100 font-normal text-lg placeholder-gray-400 rounded-xl outline-none"
              />
            </div>

            <div className="py-3">
              <input
                type="text"
                placeholder="Virtual Meeting"
                className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />
            </div>

            <div className="py-3">
              <button className="w-full py-4 font-semibold text-lg text-white bg-primary-900 rounded-xl hover:bg-primary-600  transition ease-in-out duration-500">
                Booking
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* container */}
    </section>
  );
};
