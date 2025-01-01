import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";

import dashbordSection from "../../img/home/dashbord-section.svg";

const DashbordFeature = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start({ opacity: 1, y: 0 });
    } else {
      mainControls.start({ opacity: 0, y: 50 });
    }
  }, [inView, mainControls]);

  return (
    <>
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <div
            ref={ref}
            className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-gray-500 sm:text-lg dark:text-gray-400"
            >
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Smart Dashboard for Managing Your Digital Identity
              </h2>

              <p className="mb-8 font-light lg:text-xl">
                Take control of your digital presence with an intuitive
                dashboard designed for simplicity and efficiency. Update your
                information in real time, customize your card to match your
                style, and track engagement effortlessly—all from one central
                hub
              </p>

              <ul className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-[#f35a57] dark:text-[#f35a57]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Instantly edit and update your card details anytime,
                    anywhere.
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-[#f35a57] dark:text-[#f35a57]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Monitor who views and interacts with your card for
                    actionable insights.
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-[#f35a57] dark:text-[#f35a57]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Personalize your card with templates, colors, and branding.
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-[#f35a57] dark:text-[#f35a57]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Organize and export saved contacts from your shared cards.
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-[#f35a57] dark:text-[#f35a57]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Sync your card with CRM tools and social profiles for a
                    cohesive experience.
                  </span>
                </li>
              </ul>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.45 }}
              loading="lazy"
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={dashbordSection}
              alt="dashboard feature image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DashbordFeature;
