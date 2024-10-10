"use client"
import React, { useState } from "react"

const NutritionPlan = () => {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    age: "",
    bodyFat: "",
    bmi: "",
    activityLevel: "Sedentary",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const calculateBMI = () => {
    const heightInMeters = formData.height / 100
    const bmi = formData.weight / (heightInMeters * heightInMeters)
    return bmi.toFixed(2)
  }

  const handleSubmit = () => {
    const bmiValue = calculateBMI()
    setFormData((prevData) => ({
      ...prevData,
      bmi: bmiValue,
    }))
    alert(`BMI: ${bmiValue}`)
  }

  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("/graph.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-5xl font-bold text-white">
            Add Data
          </h1>
        </div>
      </section>

      <div className="px-8 md:px-36 pt-16 pb-12">
        {/* Input Form Section */}
        <section className="py-12 px-6">
          <h2 className="text-4xl mb-8 font-bold text-gray-800 text-center">
            Add Your Health Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              className="py-3 px-6 rounded-3xl border-none bg-neutral-300"
              placeholder="Height (cm)"
            />
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              className="py-3 px-6 rounded-3xl border-none bg-neutral-300"
              placeholder="Weight (kg)"
            />
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="py-3 px-6 rounded-3xl border-none bg-neutral-300"
              placeholder="Age"
            />
            <input
              type="text"
              name="bodyFat"
              value={formData.bodyFat}
              onChange={handleInputChange}
              className="py-3 px-6 rounded-3xl border-none bg-neutral-300"
              placeholder="Body Fat Percentage (%)"
            />

            {/* Activity Level Dropdown */}
            <div className="py-3 px-6 bg-neutral-300 rounded-3xl">
              <select
                name="activityLevel"
                value={formData.activityLevel}
                onChange={handleInputChange}
                className="w-full bg-transparent border-none outline-none"
              >
                <option value="Sedentary">Sedentary</option>
                <option value="Lightly Active">Lightly Active</option>
                <option value="Moderately Active">Moderately Active</option>
                <option value="Very Active">Very Active</option>
              </select>
            </div>

            {/* Add more metrics */}
            <input
              type="text"
              name="bmi"
              value={formData.bmi || ""}
              className="py-3 px-6 rounded-3xl border-none bg-neutral-300"
              placeholder="BMI (Auto-calculated)"
              readOnly
            />
          </div>

          <button
            className="bg-purple-500 py-3 px-8 rounded-3xl w-[100px] text-white mt-6"
            onClick={handleSubmit}
          >
            Calculate
          </button>
        </section>

        {/* Analysis and Recommendations */}
        <section className="mt-12">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
            Health Analysis and Trends
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* BMI Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                BMI Chart
              </h3>
              <img
                src="https://www.cdc.gov/healthyweight/images/assessing/bmi-adult-fb-600x315.jpg?_=35345"
                alt="BMI Chart"
                className="w-full rounded-lg"
              />
            </div>

            {/* Activity Level Guide */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Activity Level & Recommendations
              </h3>
              <ul className="list-disc pl-6 text-lg text-gray-600">
                <li>
                  <strong>Sedentary:</strong> Consider starting with light
                  exercises and gradually increasing intensity.
                </li>
                <li>
                  <strong>Lightly Active:</strong> You can add strength training
                  for better results.
                </li>
                <li>
                  <strong>Moderately Active:</strong> Balanced nutrition and
                  exercises to maintain your health.
                </li>
                <li>
                  <strong>Very Active:</strong> Consider increasing your calorie
                  intake to meet energy demands.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Tips */}
        <section className="mt-12">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
            Advanced Tips & Research
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tip 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Meal Timing
              </h3>
              <p className="text-lg text-gray-600">
                Studies show that meal timing can impact weight management and
                metabolic health. Consider having consistent meal timings.
              </p>
            </div>

            {/* Tip 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Hydration
              </h3>
              <p className="text-lg text-gray-600">
                Staying hydrated is key to metabolic processes. Make sure you're
                drinking at least 8-10 glasses of water a day.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Protein Intake
              </h3>
              <p className="text-lg text-gray-600">
                Adequate protein intake is essential for muscle repair and
                overall health. Aim for 1.2-2 grams of protein per kg of body
                weight.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default NutritionPlan
