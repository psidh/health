"use client"
import React, { useState } from "react"

const healthRisks = [
  {
    title: "Increased risk of heart disease",
    description:
      "Heart disease can be influenced by diet, lifestyle choices, and genetics. Managing weight and eating heart-healthy foods can reduce risk.",
  },
  {
    title: "Risk of Type 2 diabetes",
    description:
      "Type 2 diabetes is often linked to obesity and sedentary lifestyle. Healthy eating and physical activity can help mitigate this risk.",
  },
  {
    title: "High blood pressure",
    description:
      "Maintaining a low-sodium diet and regular exercise can help keep blood pressure in check and improve overall heart health.",
  },
  {
    title: "High cholesterol levels",
    description:
      "Cholesterol levels can be managed through dietary changes, including reducing saturated fats and increasing fiber intake.",
  },
]

const mitigationStrategies = [
  {
    title: "Balanced diet",
    description:
      "A balanced diet should include a variety of vegetables, fruits, whole grains, and lean proteins to provide essential nutrients.",
  },
  {
    title: "Reduce processed sugars",
    description:
      "Minimizing the intake of sugary foods and drinks can lower the risk of developing various health issues, including obesity and diabetes.",
  },
  {
    title: "Exercise regularly",
    description:
      "Regular physical activity helps maintain a healthy weight and reduces the risk of chronic diseases.",
  },
  {
    title: "Maintain a healthy weight",
    description:
      "Achieving and maintaining a healthy weight is crucial for reducing health risks associated with obesity.",
  },
  {
    title: "Regular health check-ups",
    description:
      "Routine check-ups can help catch potential health issues early and monitor existing conditions effectively.",
  },
]

export default function Mitigation() {
  const [activeRisk, setActiveRisk] = useState(null)
  const [activeStrategy, setActiveStrategy] = useState(null)

  const handleMouseEnterRisk = (index: any) => {
    setActiveRisk(index)
  }

  const handleMouseLeaveRisk = () => {
    setActiveRisk(null)
  }

  const handleMouseEnterStrategy = (index: any) => {
    setActiveStrategy(index)
  }

  const handleMouseLeaveStrategy = () => {
    setActiveStrategy(null)
  }

  return (
    <>
      {/* Current Health Risks */}
      <section className="py-12 px-6">
        <h2 className="text-4xl mb-8 font-bold text-red-700">Current Health Risks</h2>
        <div className="space-y-4">
          {healthRisks.map((risk, index) => (
            <div
              key={index}
              className={`p-6 rounded-md ${
                activeRisk === index ? "bg-red-100" : "bg-gray-100"
              }`}
              onMouseEnter={() => handleMouseEnterRisk(index)}
              onMouseLeave={handleMouseLeaveRisk}
            >
              <div className="flex items-center">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activeRisk === index
                      ? "bg-red-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {index + 1}
                </span>
                <h3 className="text-2xl font-semibold ml-4">{risk.title}</h3>
              </div>
              <div
                className={`transition duration-500 ease-in-out ${
                  activeRisk === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="mt-2">{risk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mitigation Strategies */}
      <section className="py-12 px-6 ">
        <h2 className="text-4xl mb-8 font-bold text-green-700">How to Mitigate These Risks</h2>
        <div className="space-y-4">
          {mitigationStrategies.map((strategy, index) => (
            <div
              key={index}
              className={`p-6 rounded-md ${
                activeStrategy === index ? "bg-green-100" : "bg-gray-100"
              }`}
              onMouseEnter={() => handleMouseEnterStrategy(index)}
              onMouseLeave={handleMouseLeaveStrategy}
            >
              <div className="flex items-center">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activeStrategy === index
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {index + 1}
                </span>
                <h3 className="text-2xl font-semibold ml-4">
                  {strategy.title}
                </h3>
              </div>
              <div
                className={`transition duration-500 ease-in-out ${
                  activeStrategy === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="mt-2">{strategy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
