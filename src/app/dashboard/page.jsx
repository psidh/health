"use client"
import { requireAuth } from "@/firebase/requireAuth"
import { useState } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

const healthData = {
  weight: [80, 82, 81, 79, 80, 81, 83],
  fatPercentage: [25, 24.5, 24, 23.8, 23.5, 24, 24.2],
}

const ProfilePage = () => {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [fatPercentage, setFatPercentage] = useState("")

  const calculateBMI = () => {
    const heightInMeters = height / 100
    return weight / (heightInMeters * heightInMeters)
  }

  const bmi = calculateBMI()
  const bmiCategory =
    bmi < 18.5
      ? "Underweight"
      : bmi < 25
        ? "Normal weight"
        : bmi < 30
          ? "Overweight"
          : "Obese"

  const handleDataSubmit = (event) => {
    event.preventDefault()

    console.log("Weight:", weight, "Height:", height, "Fat %:", fatPercentage)
  }

  return (
    <div className="px-8 md:px-36 py-12 bg-secondary font-sans">
      <h1 className="text-3xl font-bold text-[var(--tertiary)] mb-8">
        Welcome to Your Health Dashboard!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 ">
        <div className=" p-6 rounded-lg card">
          <h3 className="text-lg font-semibold text-neutral-700 mb-2">BMI</h3>
          <p className="text-3xl font-bold">{bmi.toFixed(1)}</p>
          <p className="text-neutral-600">{bmiCategory}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg card">
          <h3 className="text-lg font-semibold text-neutral-700 mb-4">
            Weight and Body Fat Trends
          </h3>
          <Line
            data={{
              labels: [
                "Week 1",
                "Week 2",
                "Week 3",
                "Week 4",
                "Week 5",
                "Week 6",
                "Week 7",
              ],
              datasets: [
                {
                  label: "Weight (kg)",
                  data: healthData.weight,
                  borderColor: "#c084fc",
                  backgroundColor: "#6b21a8",
                },
                {
                  label: "Body Fat (%)",
                  data: healthData.fatPercentage,
                  borderColor: "#a78bfa",
                  backgroundColor: "#5b21b6",
                },
              ],
            }}
          />
        </div>

        <div className=" p-6 rounded-lg card">
          <h3 className="text-lg font-semibold text-neutral-700 mb-4">
            Add Your Data
          </h3>
          <form onSubmit={handleDataSubmit}>
            <div className="mb-4">
              <label
                htmlFor="weight"
                className="block text-sm font-medium text-neutral-700"
              >
                Weight (kg)
              </label>
              <input
                type="number"
                id="weight"
                className="mt-1 p-2 border rounded-md w-full"
                value={weight}
                onChange={(e) => setWeight(parseFloat(e.target.value))}
              />
            </div>
            {/* Height and Fat % inputs */}
            <div className="mb-4">
              <label
                htmlFor="height"
                className="block text-sm font-medium text-neutral-700"
              >
                Height (cm)
              </label>
              <input
                type="number"
                id="height"
                className="mt-1 p-2 border rounded-md w-full"
                value={height}
                onChange={(e) => setHeight(parseFloat(e.target.value))}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="fatPercentage"
                className="block text-sm font-medium text-neutral-700"
              >
                Fat Percentage (%)
              </label>
              <input
                type="number"
                id="fatPercentage"
                className="mt-1 p-2 border rounded-md w-full"
                value={fatPercentage}
                onChange={(e) => setFatPercentage(parseFloat(e.target.value))}
              />
            </div>

            <button
              type="submit"
              className="bg-[var(--main)] text-white px-4 py-2 rounded-md hover:bg-[var(--tertiary)] focus:outline-none focus:ring focus:ring-[var(--tertiary)]"
            >
              Save Data
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default requireAuth(ProfilePage)
