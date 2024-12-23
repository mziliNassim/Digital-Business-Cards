import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";

import hero from "../../img/home/Credit card-pana.svg";

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start({ opacity: 1, x: 0 });
    } else {
      mainControls.start({ opacity: 0, x: -50 });
    }
  }, [inView, mainControls]);

  return (
    <>
      <section className="bg-white overflow-y-hidden dark:bg-gray-900">
        <div
          ref={ref}
          className="grid max-w-screen-xl  px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={mainControls}
            transition={{ duration: 0.5 }}
            className="mr-auto place-self-center lg:col-span-7"
          >
            <h1 className="max-w-2xl mb-7 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              <span>Effortless Networking with Digital Business Cards.</span>
            </h1>

            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Share your professional identity instantly and seamlessly with a
              digital business card. Connect with anyone, anywhere, and make
              every interaction memorable.
            </p>

            <div className=" space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="heroLink inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center  border-2 rounded-lg sm:w-auto hover:bg-gray-100 border-[#f35a57] text-[#f35a57] focus:ring-4 focus:ring-gray-100 dark:border-[#f35a57] dark:hover:bg-gray-700 dark:hover:border-[#f35a57] dark:text-[#f35a57] dark:focus:ring-gray-800"
              >
                <svg
                  className="w-6 h-6 mr-2 text-[#f35a57] dark:text-[#f35a57] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                    clipRule="evenodd"
                  />
                </svg>
                Free trial for 30 days
              </a>
              <a
                href="#"
                className="heroLink inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center  border-2 rounded-lg sm:w-auto hover:bg-gray-100 border-[#f35a57] text-[#f35a57] focus:ring-4 focus:ring-gray-100 dark:border-[#f35a57] dark:hover:bg-gray-700 dark:hover:border-[#f35a57] dark:text-[#f35a57] dark:focus:ring-gray-800"
              >
                <svg
                  className="w-6 h-6 mr-2 text-[#f35a57] dark:text-[#f35a57] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                    clipRule="evenodd"
                  />
                </svg>
                Digital Business Cards for Teams
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={mainControls}
            transition={{ duration: 0.5 }}
            className="hidden lg:mt-0 lg:col-span-5 lg:flex"
          >
            <img src={hero} alt="hero image" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
