import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { Link } from "react-router-dom";

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const mainControls = useAnimation();
  const subControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start({ opacity: 1, y: 0 });
      subControls.start({ opacity: 1, y: 0, x: 0 });
    } else {
      mainControls.start({ opacity: 0, y: 50 });
      subControls.start({ opacity: 0, y: 50, x: 50 });
    }
  }, [inView, mainControls, subControls]);

  return (
    <>
      <section className="section bg-white dark:bg-gray-900">
        <div
          ref={ref}
          className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-2 mb-8"
          >
            <p className="text-lg font-medium text-[#f35a57] dark:text-[#f35a57]">
              Trusted Worldwide
            </p>
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Trusted by over 600 million users and 10,000 teams
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Join thousands of professionals and businesses globally who trust
              our digital business cards to simplify networking. With a focus on
              privacy and data security, we ensure your information is shared
              securely and effortlessly.
            </p>
            <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
              <div>
                <Link
                  to="/test"
                  className="inline-flex items-center text-base font-medium text-[#f35a57] opacity-75 hover:opacity-100 hover:text-text-[#f35a57] dark:text-text-[#f35a57] dark:hover:text-text-[#f35a57]"
                >
                  Explore Legality Guide
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, x: 50 }}
              animate={subControls}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <svg
                className="w-10 h-10 mb-2 text-[#f35a57] md:w-12 md:h-12 dark:text-[#f35a57]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                99.99% uptime
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                For Landwind, with zero maintenance downtime
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50, x: 50 }}
              animate={subControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <svg
                className="w-10 h-10 mb-2 text-[#f35a57] md:w-12 md:h-12 dark:text-[#f35a57]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                  clipRule="evenodd"
                />
              </svg>

              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                600M+ Users
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Trusted by over 600 milion users around the world
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50, x: 50 }}
              animate={subControls}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <svg
                className="w-10 h-10 mb-2 text-[#f35a57] md:w-12 md:h-12 dark:text-[#f35a57]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>

              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                10,000+ Teams
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Organizations worldwide use our cards to unify their branding
                and streamline introductions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50, x: 50 }}
              animate={subControls}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <svg
                className="w-10 h-10 mb-2 text-[#f35a57] md:w-12 md:h-12 dark:text-[#f35a57]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                Global Reach
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Share your card effortlessly across 190+ countries.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Stats;
