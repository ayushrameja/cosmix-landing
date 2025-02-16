import { useState } from "react";
import { motion } from "framer-motion";
import BackgroundImg from "../assets/background.png";

const BackgroundImage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "black",
      }}
    >
      <img
        src={BackgroundImg}
        alt="Background"
        onLoad={() => setIsLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </motion.div>
  );
};

export default BackgroundImage;
