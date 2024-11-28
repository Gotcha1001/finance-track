"use client";
import { motion } from "framer-motion";

export default function SavingTipsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Learn How to Save More</h1>
      <p className="mt-4 mb-8">
        Discover tips and strategies for reducing your monthly spending and
        boosting savings.
      </p>

      {/* Strategy Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1: Identify Needs vs. Wants */}
        <div className="gradient-background2 shadow-lg rounded-lg p-6 border border-gray-300">
          <h2 className="text-xl font-semibold mb-4">
            1. Identify Needs vs. Wants
          </h2>
          <ul className="list-disc pl-5">
            <li>Assess your monthly expenses and categorize them.</li>
            <li>
              Identify which items are essential (needs) and which are optional
              (wants).
            </li>
            <li>
              Prioritize spending on needs and cut back on wants to save money.
            </li>
          </ul>
        </div>

        {/* Card 2: Set a Budget */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 gradient-background2">
          <h2 className="text-xl font-semibold mb-4">2. Set a Budget</h2>
          <ul className="list-disc pl-5">
            <li>Determine your total monthly income.</li>
            <li>
              Set spending limits for each category (housing, food,
              transportation, etc.).
            </li>
            <li>Track your expenses to stay within your budget.</li>
          </ul>
        </div>

        {/* Card 3: Track and Analyze Spending */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 gradient-background2">
          <h2 className="text-xl font-semibold mb-4">
            3. Track and Analyze Spending
          </h2>
          <ul className="list-disc pl-5">
            <li>Use apps or spreadsheets to record daily expenses.</li>
            <li>
              Review your spending trends monthly to spot areas for savings.
            </li>
            <li>
              Adjust your budget based on your analysis to optimize your
              spending.
            </li>
          </ul>
        </div>

        {/* Card 4: Create a Savings Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 gradient-background2">
          <h2 className="text-xl font-semibold mb-4">
            4. Create a Savings Plan
          </h2>
          <ul className="list-disc pl-5">
            <li>
              Set specific savings goals (e.g., emergency fund, vacation,
              retirement).
            </li>
            <li>
              Allocate a portion of each paycheck to savings automatically.
            </li>
            <li>Stick to your savings plan to build a financial safety net.</li>
          </ul>
        </div>

        {/* Card 5: Limit Unnecessary Purchases */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 gradient-background2">
          <h2 className="text-xl font-semibold mb-4">
            5. Limit Unnecessary Purchases
          </h2>
          <ul className="list-disc pl-5">
            <li>Wait 24 hours before making impulse purchases.</li>
            <li>
              Shop with a list and avoid browsing to prevent buying things you
              don’t need.
            </li>
            <li>Look for discounts and compare prices before buying.</li>
          </ul>
        </div>

        {/* Card 6: Review Subscriptions */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 gradient-background2">
          <h2 className="text-xl font-semibold mb-4">
            6. Review Subscriptions
          </h2>
          <ul className="list-disc pl-5">
            <li>Cancel subscriptions you no longer use or need.</li>
            <li>Opt for shared plans with family or friends when possible.</li>
            <li>
              Evaluate whether each subscription provides value for its cost.
            </li>
          </ul>
        </div>
      </div>

      {/* Savings Formula */}
      <div className="mt-12 p-6 bg-gray-100 rounded-lg border gradient-background2 border-gray-300">
        <h2 className="text-2xl font-semibold mb-4 ">
          Savings Calculation Formula
        </h2>
        <p className="mb-4">
          Use this simple formula to calculate your monthly savings:
        </p>
        <p className="font-mono text-lg">
          <strong>
            Monthly Savings = Monthly Income - Total Monthly Expenses
          </strong>
        </p>
        <p className="mt-4">
          Ensure to track your income and expenses accurately to get an accurate
          savings figure.
        </p>
      </div>

      {/* Image Section with Framer Motion */}
      <div className="mt-12 text-center">
        <motion.img
          src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=800" // Replace with the correct path to your image
          alt="Savings Tips"
          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }} // Scale up on hover
          whileTap={{ scale: 0.95 }} // Scale down on click
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>
    </div>
  );
}
