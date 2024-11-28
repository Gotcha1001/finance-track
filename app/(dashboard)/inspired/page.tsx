"use client";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      {/* Image with animation */}
      <motion.img
        src="https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Placeholder Image"
        className="mb-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated Button */}
      <motion.button
        className="px-6 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        Hover or Click Me!
      </motion.button>

      {/* Another animated Button */}
      <motion.button
        className="mt-4 px-6 py-3 bg-green-500 text-white rounded shadow hover:bg-green-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        Another Button
      </motion.button>
    </div>
  );
}
