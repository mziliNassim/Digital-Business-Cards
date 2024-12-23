import React from "react";
import { motion } from "motion/react";

const Alert = ({ status, message }) => {
  const statusConfig = {
    success: {
      bgColor: "bg-green-400",
      borderColor: "border-green-400",
      textColor: "text-green-400",
    },
    warning: {
      bgColor: "bg-yellow-400",
      borderColor: "border-yellow-400",
      textColor: "text-yellow-400",
    },
    danger: {
      bgColor: "bg-red-400",
      borderColor: "border-red-400",
      textColor: "text-red-400",
    },
  };

  const config = statusConfig[status];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        className={` croissant-One_font fixed top-24 left-12 px-3 py-3
          rounded-md border ${config.borderColor} w-auto
          overflow-hidden backdrop-blur-md`}
      >
        <p className={`${config.textColor}`}>{message}</p>
        <div className="absolute inset-x-0 h-1 bottom-0 bg-[rgba(255, 255, 255, 0.5)]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 4, delay: 0.5 }}
            className={`${config.bgColor} h-full`}
          ></motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Alert;
