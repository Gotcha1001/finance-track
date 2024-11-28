"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from Next.js

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-8 gradient-background-2 min-h-screen">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to Your Financial Tracker
      </h1>
      <p className="text-lg mb-4 text-center">
        Manage your budget, cut costs, and save for the future with ease.
      </p>

      {/* Image with animation */}
      <motion.img
        src="https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Money"
        className="mb-4 rounded-lg shadow-lg my-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated Button with Link */}
      <Link href="/tracking" passHref>
        <motion.button
          className="px-6 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-300 mb-4 mt-5"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          Start Tracking Your Finances
        </motion.button>
      </Link>

      {/* Another animated Button with Link */}
      <Link href="/saving-tips" passHref>
        <motion.button
          className="px-6 py-3 bg-green-500 text-white rounded shadow hover:bg-green-600 transition duration-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          Learn How to Save More
        </motion.button>
      </Link>

      {/* Testimonials */}
      <div className="mt-10 w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg gradient-background2">
        <h2 className="text-2xl font-semibold mb-4">
          What Our Users Are Saying
        </h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-300 rounded-lg">
            <p className="italic">
              &quot;This app has completely transformed how I manage my budget.
              I was able to save $2,000 last year by tracking my daily expenses
              and cutting out unnecessary costs. I&rsquo;m now on track to save
              for my education next year!&quot; &ndash; <strong>Emma L.</strong>
            </p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg">
            <p className="italic">
              &quot;Thanks to this tool, I&apos;ve reduced my monthly spending
              by 15%. The intuitive calculations and alerts keep me accountable,
              and I&apos;m finally saving for my dream vacation!&quot; &ndash;{" "}
              <strong>James R.</strong>
            </p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg">
            <p className="italic">
              &quot;With this app, I learned how to cut costs without feeling
              deprived. I used the savings to invest in a side project
              that&apos;s helping me secure a better future.&quot; &ndash;{" "}
              <strong>Alice C.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Simple Calculation for Budgeting */}
      <div className="mt-10 w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg gradient-background2">
        <h2 className="text-2xl font-semibold mb-4">
          Calculate Your Savings Potential
        </h2>
        <p className="mb-2">Monthly income: $3,000</p>
        <p className="mb-2">Total monthly expenses: $2,500</p>
        <p className="font-bold">Potential monthly savings: ${3000 - 2500}</p>
      </div>
    </div>
  );
}
