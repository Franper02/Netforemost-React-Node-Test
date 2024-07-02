import { motion } from "framer-motion";

// Loader component for displaying a loading animation when queries are loading with the Netforemost logo
const Loader = () => {
  const centerX = 114; // Center X coordinate of the SVG
  const centerY = 114; // Center Y coordinate of the
  return (
    <div className="flex items-center justify-center h-[85vh]">
      <svg
        width="228"
        height="228"
        viewBox="0 0 228 228"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          opacity="0.995"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M124.061 13.4929C141.04 56.0032 158.28 98.4411 175.782 140.806C176.372 141.691 176.372 142.575 175.782 143.459C131.153 110.325 86.5046 77.3176 41.8379 44.4371C58.0483 27.0473 78.0887 16.8799 101.958 13.9349C109.32 13.4931 116.688 13.3457 124.061 13.4929Z"
          fill="#FCBC05"
          initial={{
            translateX: 114 - centerX,
            translateY: 114 - centerY,
            scale: 1,
          }}
          animate={{ translateX: 0, translateY: 0, scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          opacity="0.969"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M166.499 27.6387C205.656 54.4099 220.686 91.2477 211.589 138.154C195.856 101.667 180.826 64.8293 166.499 27.6387Z"
          fill="#05AE1A"
          initial={{
            translateX: 114 - centerX,
            translateY: 114 - centerY,
            scale: 1,
          }}
          animate={{ translateX: 0, translateY: 0, scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          opacity="0.994"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M182.413 187.665C159.49 208.075 132.672 216.622 101.958 213.304C86.0047 173.437 69.7961 133.652 53.3311 93.9478C53.6255 93.6534 53.9208 93.3581 54.2152 93.0637C97.1649 124.401 139.897 155.934 182.413 187.665Z"
          fill="#FD1D12"
          initial={{
            translateX: 114 - centerX,
            translateY: 114 - centerY,
            scale: 1,
          }}
          animate={{ translateX: 0, translateY: 0, scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          opacity="0.953"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.3139 98.3684C28.734 129.936 41.7015 161.764 54.2153 193.854C39.782 183.682 29.0249 170.42 21.9449 154.068C14.3228 136 12.1125 117.434 15.3139 98.3684Z"
          fill="#1281FF"
          initial={{
            translateX: 114 - centerX,
            translateY: 114 - centerY,
            scale: 1,
          }}
          animate={{ translateX: 0, translateY: 0, scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export default Loader;
