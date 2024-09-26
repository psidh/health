"use client"
import React, { useState } from "react"

export default function Roadmap() {
  const [activeStep, setActiveStep] = useState(null)

  const handleMouseEnter = (step: any) => {
    setActiveStep(step)
  }

  const handleMouseLeave = () => {
    setActiveStep(null)
  }

  return (
    <section className="py-12 px-6">
      <h2 className="text-4xl font-bold my-8">4-Week Nutrition Plan</h2>
      <div className="space-y-6">
        {Array.from({ length: 4 }, (_, index) => {
          const step = index + 1
          return (
            <div
              key={step}
              className={`p-6 rounded-md  cursor-pointer ${
                activeStep === step ? "bg-green-50" : "bg-gray-100"
              }`}
              onMouseEnter={() => handleMouseEnter(step)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activeStep === step
                      ? "bg-green-700 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {step}
                </span>
                <h3 className="text-2xl font-semibold ml-4">
                  Week {step}:{" "}
                  {step === 1
                    ? "Clean Eating"
                    : step === 2
                      ? "Portion Control"
                      : step === 3
                        ? "Macronutrient Focus"
                        : "Lifestyle Integration"}
                </h3>
              </div>
              <div
                className={`transition duration-500 ease-in-out ${
                  activeStep === step ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="mt-2">
                  {step === 1
                    ? "Focus on eliminating processed foods, added sugars, and fried foods. Introduce more whole grains, vegetables, and lean protein sources."
                    : step === 2
                      ? "Start controlling portion sizes. Aim for balanced meals that include vegetables, protein, and complex carbs. Drink plenty of water."
                      : step === 3
                        ? "Track macronutrient intake. Increase protein, moderate carbs, and reduce unhealthy fats. Consider adding healthy fats like nuts and avocado."
                        : "Continue healthy habits. Start incorporating physical activity like jogging or strength training at least 3 times a week."}
                </p>
                <div className="mt-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
