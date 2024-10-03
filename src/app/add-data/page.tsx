import React from "react"

const NutritionPlan = () => (
  <div className="">

    <div className="px-8 md:px-36 pt-16 pb-12">
      {/* Blog Cards Section */}
      <section className="py-12 px-6">
        <h2 className="text-4xl mb-8 font-bold text-gray-800 text-center">
          Add metric Data
        </h2>
        <div className="flex flex-col items-start justify-start space-y-6">
          {/* Blog Card 1 */}

          <input
            title="hi"
            type="text"
            className="py-3 px-6 rounded-3xl border-none bg-neutral-300"
            placeholder="Height"
          />
          <input
            title="hi"
            type="text"
            className="py-3 px-6 rounded-3xl border-none bg-neutral-300 "
            placeholder="Weight"
          />
        <button className="bg-purple-500 py-3 px-8 rounded-3xl w-[100px] text-white mt-6">Add</button>
          {/* Blog Card 2 */}
        </div>
      </section>
    </div>
  </div>
)

export default NutritionPlan
