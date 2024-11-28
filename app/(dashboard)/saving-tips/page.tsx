"use client";
import { motion } from "framer-motion";

export default function TrackingPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Start Tracking Your Finances</h1>
      <p className="mt-4">
        Here you can track your daily expenses, set goals, and monitor your
        budget.
      </p>

      {/* Tips Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Tips for Tracking Your Cash
        </h2>
        <ul className="list-disc pl-5">
          <li>Use budgeting apps or spreadsheets to record daily expenses.</li>
          <li>
            Review your transactions regularly to identify spending patterns.
          </li>
          <li>
            Set monthly goals and allocate specific amounts for each spending
            category.
          </li>
          <li>
            Utilize expense tracking tools that sync with your bank accounts for
            real-time updates.
          </li>
          <li>
            Keep track of your receipts or use a digital receipt scanning app.
          </li>
        </ul>
      </div>

      {/* Testimonies Section */}
      <div className="mt-8 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">What Others Are Saying</h2>
        <blockquote className="italic p-4 mb-4 gradient-background2">
          &quot;Tracking my expenses has helped me save more and spend smarter.
          I now understand where my money goes, which has made budgeting so much
          easier!&quot; &ndash; Alex R.
        </blockquote>
        <blockquote className="italic p-4 bg-gray-100 mb-4 gradient-background2">
          &quot;Using a budgeting app to track my daily spending has been a game
          changer. I never thought I could save up for a vacation so
          quickly!&quot; &ndash; Maria L.
        </blockquote>
        <blockquote className="italic p-4 bg-gray-100 gradient-background2">
          &quot;I&apos;ve been more mindful about my purchases ever since I
          started recording them. It&apos;s empowering to see my progress.&quot;
          &ndash; James W.
        </blockquote>
      </div>

      {/* Image Section with Framer Motion */}
      <div className="mt-12 text-center">
        <motion.img
          src="https://images.pexels.com/photos/271168/pexels-photo-271168.jpeg?auto=compress&cs=tinysrgb&w=800" // Replace with your image URL
          alt="Tracking Finances"
          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }} // Scale up on hover
          whileTap={{ scale: 0.95 }} // Scale down on click
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>
    </div>
  );
}
