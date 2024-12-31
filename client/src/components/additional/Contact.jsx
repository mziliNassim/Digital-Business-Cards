import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "motion/react";

const Contact = () => {
  const { user } = useSelector((state) => state.user);
  const messageRef = useRef(null);

  useEffect(() => {
    messageRef.current.focus();
  }, []);

  const [contactInfo, setContactInfo] = useState({
    name: user?.username || "",
    email: user?.email || "",
    message: "",
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSumit = (e) => {
    e.preventDefault();
    window.alert("submit");
  };

  return (
    <>
      <section className="bg-white overflow-y-hidden dark:bg-gray-900">
        <div className="flex flex-col items-start justify-center max-w-screen-xl w-full px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div class="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              class="mb-6 max-w-3xl text-left md:mx-auto md:mb-12"
            >
              <p class="text-base font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-600">
                Contact
              </p>
              <h2 class="font-heading mb-4 font-bold tracking-tight text-[#f35a57] dark:text-[#f35a57] text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                In hac habitasse platea dictumst
              </p>
            </motion.div>
          </div>
          <div class="flex items-stretch justify-center">
            <div class="grid md:grid-cols-2">
              <div class="h-full pr-6">
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  class="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400"
                >
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut
                  scelerisque sagittis ante, ac tincidunt sem venenatis ut.
                </motion.p>
                <ul class="mb-6 md:mb-0">
                  <motion.li
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.75 }}
                    class="flex"
                  >
                    <div class="flex h-10 w-10 items-center justify-center rounded bg-[#f35a57] text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Our Address
                      </h3>
                      <p class="text-gray-600 dark:text-slate-400">
                        1230 Maecenas Street Donec Road
                      </p>
                      <p class="text-gray-600 dark:text-slate-400">
                        New York, EEUU
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.85 }}
                    class="flex"
                  >
                    <div class="flex h-10 w-10 items-center justify-center rounded bg-[#f35a57] text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Contact
                      </h3>
                      <p class="text-gray-600 dark:text-slate-400">
                        Mobile: +1 (123) 456-7890
                      </p>
                      <p class="text-gray-600 dark:text-slate-400">
                        Mail: tailnext@gmail.com
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.95 }}
                    class="flex"
                  >
                    <div class="flex h-10 w-10 items-center justify-center rounded bg-[#f35a57] text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Working hours
                      </h3>
                      <p class="text-gray-600 dark:text-slate-400">
                        Monday - Friday: 08:00 - 17:00
                      </p>
                      <p class="text-gray-600 dark:text-slate-400">
                        Saturday &amp; Sunday: 08:00 - 12:00
                      </p>
                    </div>
                  </motion.li>
                </ul>
              </div>

              <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.75 }}
                  class="mb-4 text-2xl font-bold dark:text-white"
                >
                  Ready to Get Started?
                </motion.h2>
                <form onSubmit={handleSumit} id="contactForm">
                  <div class="mb-6">
                    <div class="mx-0 mb-1 sm:mb-4">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.75 }}
                        class="mx-0 mb-1 sm:mb-4"
                      >
                        <label
                          for="name"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={contactInfo.name}
                          onChange={handleChange}
                          class="mb-2 w-full rounded-md border border-gray-200 dark:border-gray-700 outline-none py-2 pl-2 pr-4 shadow-md dark:text-gray-300 bg-gray-50 dark:bg-gray-800 focus:outline-double focus:outline-[#f35a57] focus:scale-[1.02] transition-all sm:mb-0"
                          autocomplete="given-name"
                          placeholder="Your name"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.85 }}
                        class="mx-0 mb-1 sm:mb-4"
                      >
                        <label
                          for="email"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          onChange={handleChange}
                          autocomplete="email"
                          class="mb-2 w-full rounded-md border border-gray-200 dark:border-gray-700 outline-none py-2 pl-2 pr-4 shadow-md dark:text-gray-300 bg-gray-50 dark:bg-gray-800 focus:outline-double focus:outline-[#f35a57] focus:scale-[1.02] transition-all sm:mb-0"
                          value={contactInfo.email}
                          placeholder="Your email address"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.95 }}
                      class="mx-0 mb-1 sm:mb-4"
                    >
                      <label
                        for="textarea"
                        class="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="textarea"
                        name="message"
                        value={contactInfo.message}
                        onChange={handleChange}
                        ref={messageRef}
                        cols="30"
                        rows="5"
                        class="mb-2 w-full rounded-md border border-gray-200 dark:border-gray-700 outline-none py-2 pl-2 pr-4 shadow-md dark:text-gray-300 bg-gray-50 dark:bg-gray-800 focus:outline-double focus:outline-[#f35a57] focus:scale-[1.02] transition-all sm:mb-0"
                        placeholder="Write your message..."
                      ></textarea>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    class="text-center"
                  >
                    <button
                      type="submit"
                      class="w-full bg-[#f35a57] text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </motion.div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
