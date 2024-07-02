import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  url: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ url, children }) => {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.05 }}
      href={url}
      className="relative px-[39px] py-[26px] rounded-[15px] shadow-[0_0_3px_3px_#C8C8C8]"
      target="_blank"
    >
      <div className="absolute inset-0 blur-lg rounded-[15px] bg-white"></div>
      <div className="relative rounded-[15px]">{children}</div>
    </motion.a>
  );
};

export default Card;
