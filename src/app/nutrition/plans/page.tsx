import React from "react"
import Statcard from "./Statcard"
import Roadmap from "./Roadmap"
import Mitigation from "./Mitigation"

const NutritionPlan = () => (
  <div className="">
    {/* Hero Section */}
    <section
      className="relative h-96 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://domf5oio6qrcr.cloudfront.net/medialibrary/13503/bigstock-Health-food-selection-super-foods-fruits-veggies.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <h1 className="text-5xl font-bold text-white">
          Your Personalized Nutrition Plan
        </h1>
      </div>
    </section>

    <div className="px-8 md:px-36 pt-16 pb-12">
      <Statcard />

      {/* Health Risks Section */}
      <Mitigation />
      <Roadmap />

      {/* Blog Cards Section */}
      <section className="py-12 px-6">
        <h2 className="text-4xl mb-8 font-bold text-gray-800 text-center">
          Helpful Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Blog Card 1 */}
          <div className="border border-neutral-200 rounded-lg overflow-hidden transition-transform transform duration-150 cursor-pointer hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Understanding Macronutrients
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Learn how proteins, carbs, and fats impact your body and how to
                balance them for optimal health.
              </p>
              <a
                href="#"
                className="text-indigo-600 font-semibold block mt-4 hover:text-indigo-500 transition-colors"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="border border-neutral-200 rounded-lg overflow-hidden transition-transform transform duration-150 cursor-pointer hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                The Benefits of Regular Exercise
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Discover the importance of staying active and how it can prevent
                many lifestyle diseases.
              </p>
              <a
                href="#"
                className="text-indigo-600 font-semibold block mt-4 hover:text-indigo-500 transition-colors"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="border border-neutral-200 rounded-lg overflow-hidden transition-transform transform duration-150 cursor-pointer hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Heart-Healthy Recipes
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Find easy and delicious recipes that are great for your heart
                and overall well-being.
              </p>
              <a
                href="#"
                className="text-indigo-600 font-semibold block mt-4 hover:text-indigo-500 transition-colors"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default NutritionPlan
