import React from "react";
import "../styles/coming-soon.scss";
import { motion } from "framer-motion";
import BellIcon from "../assets/bell.svg";
import BackgroundImage from "../components/BackgroundImage";

const ComingSoon: React.FC = () => {
  return (
    <div className="coming-soon">
      <BackgroundImage />

      <motion.div
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          animate={{
            backgroundImage: [
              "linear-gradient(to right, #ff0000, #ffff00)",
              "linear-gradient(to right, #ffff00, #00ff00)",
              "linear-gradient(to right, #00ff00, #00ffff)",
              "linear-gradient(to right, #00ffff, #0000ff)",
              "linear-gradient(to right, #0000ff, #ff00ff)",
              "linear-gradient(to right, #ff00ff, #ff0000)",
              "linear-gradient(to right, #ff0000, #ffff00)",
            ],
          }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Cosmix
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          A modular, configurable background library for creative, cosmic
          visuals.
        </motion.p>

        <motion.div
          className="subscribe-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.input
            type="email"
            placeholder="Subscribe for updates!"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          />
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={BellIcon} alt="Bell Icon" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
