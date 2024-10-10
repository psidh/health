"use client"
import React from "react"
import { Line, Bar, Doughnut } from "react-chartjs-2"
import "chart.js/auto" // Import Chart.js for React-Chartjs-2

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
  ],
  datasets: [
    {
      label: "Caloric Intake (kcal)",
      data: [1800, 1750, 1850, 1900, 2100, 2000, 2050, 1950, 1900, 1800],
      fill: false,
      backgroundColor: "#4F46E5",
      borderColor: "#4F46E5",
    },
    {
      label: "Exercise Duration (minutes)",
      data: [30, 35, 28, 50, 45, 40, 38, 35, 30, 32],
      fill: false,
      backgroundColor: "#EF4444",
      borderColor: "#EF4444",
    },
  ],
}

const nutritionBreakdown = {
  labels: ["Protein", "Carbs", "Fats"],
  datasets: [
    {
      data: [35, 50, 15],
      backgroundColor: ["#22C55E", "#3B82F6", "#F59E0B"],
      hoverBackgroundColor: ["#16A34A", "#2563EB", "#D97706"],
    },
  ],
}

const sleepTrendData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
  datasets: [
    {
      label: "Sleep Hours",
      data: [7.5, 8, 6.5, 7, 8.2],
      backgroundColor: "#9BC5FFFF",
      borderWidth: 2,
    },
  ],
}

const researchArticles = [
  {
    title: "The Impact of Macronutrient Balancing on Weight Loss",
    summary:
      "Extensive research suggests that balancing macronutrients not only helps in weight loss but also improves overall metabolic health. A study by Dr. Jane Doe from Harvard University emphasizes the importance of protein intake in maintaining muscle mass while reducing body fat.",
  },
  {
    title: "Exercise and Its Role in Mental Health",
    summary:
      "Regular physical activity has been proven to enhance mood, reduce anxiety, and improve cognitive function. A recent meta-analysis published in the Journal of Psychiatry highlights how aerobic exercise leads to the release of endorphins, natural mood lifters.",
  },
  {
    title: "The Science Behind Intermittent Fasting",
    summary:
      "Intermittent fasting is gaining popularity as an effective weight loss method. Research from Stanford University indicates that intermittent fasting not only aids weight loss but also improves insulin sensitivity and promotes cellular repair through autophagy.",
  },
]

const AdvancedAnalysis = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center z-10"
        style={{
          backgroundImage:
            'url("https://as1.ftcdn.net/v2/jpg/08/35/58/28/1000_F_835582836_ZqLr2WrJ17YvrQezHFLvTJgSArEETNiH.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <h1 className="text-5xl font-bold text-white">
            Advanced Health Analytics
          </h1>
        </div>
      </section>

      <div className="mt-16 px-8 md:px-36 pb-16">
        <div className="">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Health Trends & Analysis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Line Chart: Caloric Intake vs Exercise */}
            <div className="bg-white border border-neutral-300 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Caloric Intake vs Exercise Duration
              </h3>
              <Line data={data} />
            </div>

            {/* Doughnut Chart: Nutrition Breakdown */}
            <div className="bg-white border border-neutral-300 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Nutrition Breakdown
              </h3>
              <Doughnut data={nutritionBreakdown} />
            </div>
          </div>
        </div>

        {/* Sleep Trend Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Weekly Sleep Trend
          </h2>
          <div className="bg-white border border-neutral-300 p-6 rounded-lg">
            <Bar data={sleepTrendData} />
          </div>
        </div>

        {/* Research Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Latest Health Research
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchArticles.map((article, index) => (
              <div key={index} className="bg-white border border-neutral-300 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.summary}</p>
                <a
                  href="#"
                  className="text-indigo-600 font-semibold block mt-4 hover:text-indigo-500 transition-colors"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Analysis */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Advanced Nutritional Insights
          </h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-lg leading-relaxed mb-4">
              In-depth analysis of caloric intake, macronutrient distribution,
              and sleep quality has shown a strong correlation between
              well-balanced diets and improved sleep patterns. Research from
              multiple sources suggests that individuals consuming a higher
              proportion of complex carbohydrates, alongside adequate protein,
              experience more restful sleep.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Additionally, studies indicate that individuals who engage in
              regular aerobic exercise show reduced levels of inflammation and a
              healthier balance of gut microbiota, which contributes to improved
              mental and physical health outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedAnalysis
