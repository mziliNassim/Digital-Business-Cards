import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { Link } from "react-router-dom";

const FreeTrial = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
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
      <section className="section bg-white dark:bg-gray-900">
        <div
          ref={ref}
          className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-screen-sm mx-auto text-center"
          >
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Start your free trial today
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Try Landwind Platform for 30 days. No credit card required.
            </p>
            <Link
              to="/services/pricing"
              className="text-white bg-[#f35a57] hover:bg-[#f35a57] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 opacity-80 hover:opacity-100 dark:bg-[#f35a57] dark:hover:bg-[#f35a57] focus:outline-none dark:focus:ring-[#f35a57]"
            >
              Free trial for 30 days
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FreeTrial;
