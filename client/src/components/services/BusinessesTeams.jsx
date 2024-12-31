import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const BusinessesTeams = () => {
  const [activeTab, setActiveTab] = useState("features");

  const features = [
    {
      icon: "bi bi-people-fill",
      title: "Team Management",
      description:
        "Easily manage and organize your team's digital business cards",
    },
    {
      icon: "bi bi-graph-up",
      title: "Analytics Dashboard",
      description: "Track engagement and performance metrics across your team",
    },
    {
      icon: "bi bi-shield-check",
      title: "Admin Controls",
      description: "Advanced security and permission settings for team leaders",
    },
    {
      icon: "bi bi-brush",
      title: "Brand Consistency",
      description: "Maintain brand guidelines across all team members' cards",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Sales Director",
      company: "TechCorp",
      image: "/api/placeholder/64/64",
      content: "Revolutionized our sales team's networking capabilities.",
    },
    {
      name: "Michael Chen",
      role: "Marketing Lead",
      company: "GrowthCo",
      image: "/api/placeholder/64/64",
      content:
        "Perfect solution for managing our global team's digital presence.",
    },
  ];

  return (
    <section className="bg-white overflow-y-hidden dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center max-w-screen-xl w-full px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-4xl font-bold text-[#f35a57] mb-4"
          >
            Digital Business Cards for Teams
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
          >
            Empower your team with professional digital business cards that
            maintain brand consistency
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex justify-center mb-8"
        >
          <div className="flex space-x-4 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
            {["features", "testimonials"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg ${
                  activeTab === tab
                    ? "bg-white dark:bg-gray-700 text-[#f35a57] shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                } capitalize transition-colors duration-150`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <div className="mt-12">
          {activeTab === "features" ? (
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
              {features.map((feature, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + 0.2 * index }}
                  key={index}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <i
                    className={`${feature.icon} text-3xl text-[#f35a57] mb-4`}
                  ></i>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + 0.2 * index }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{testimonial.content}"
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.75 }}
          className="mt-16 text-center"
        >
          <Link
            to="/services/pricing"
            className="px-8 py-3 bg-[#f35a57]  hover:bg-[#f35a] text-white rounded-xl font-semibold shadow-lg transition-colors duration-200"
          >
            Start Your Team Trial
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessesTeams;
