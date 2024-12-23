import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";

import { faqs } from "../../data/frequently";

const Frequently = () => {
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
      <section className="bg-gray-50 dark:bg-gray-800">
        <div
          ref={ref}
          className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white"
          >
            Frequently asked questions
          </motion.h2>

          <div className="max-w-screen-md mx-auto">
            <div
              id="accordion-flush"
              data-accordion="collapse"
              data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                data-inactive-classes="text-gray-500 dark:text-gray-400"
              >
                {faqs?.map((faq, i) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: i / 6 }}
                      key={faq.id}
                    >
                      <h2 id={`accordion-flush-heading-${faq.id}`}>
                        <button
                          type="button"
                          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                          data-accordion-target={`#accordion-flush-body-${faq.id}`}
                          aria-expanded="true"
                          aria-controls={`accordion-flush-body-${faq.id}`}
                        >
                          <span>{faq.question}</span>

                          <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5 5 1 1 5"
                            />
                          </svg>
                        </button>
                      </h2>

                      <div
                        id={`accordion-flush-body-${faq.id}`}
                        className="hidden"
                        aria-labelledby={`accordion-flush-heading-${faq.id}`}
                      >
                        <div className="p-5 border-b border-gray-200 dark:border-gray-700">
                          <p className="mb-2 text-gray-500 dark:text-gray-400">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Frequently;
