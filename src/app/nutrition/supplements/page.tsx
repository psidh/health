import React from "react"

const supplements = [
  {
    title: "Multivitamins",
    description:
      "Essential for filling dietary gaps, multivitamins support overall health and well-being.",
    link: "#",
  },
  {
    title: "Omega-3 Fatty Acids",
    description:
      "Omega-3s are known for their heart health benefits and are essential for brain function.",
    link: "#",
  },
  {
    title: "Protein Powder",
    description:
      "A convenient way to increase protein intake, beneficial for muscle recovery and growth.",
    link: "#",
  },
  {
    title: "Probiotics",
    description:
      "These support gut health by balancing the bacteria in your digestive system.",
    link: "#",
  },
  {
    title: "Vitamin D",
    description:
      "Crucial for bone health, vitamin D supports the immune system and overall mood.",
    link: "#",
  },
  {
    title: "Magnesium",
    description:
      "An essential mineral that supports muscle function and energy production.",
    link: "#",
  },
]

export default function SupplementsPage() {
  return (
    <div className="px-8 md:px-36 pt-16 pb-12">
      <h2 className="text-4xl mb-8 font-bold text-neutral-800 text-center">
        Recommended Supplements
      </h2>
      <p className="text-lg text-neutral-600 mb-8 text-center">
        Explore our selection of supplements designed to enhance your health and
        well-being.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {supplements.map((supplement, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
                {supplement.title}
              </h3>
              <p className="text-lg text-neutral-600 mb-4">
                {supplement.description}
              </p>
              <a
                href={supplement.link}
                className="text-indigo-600 font-semibold block mt-4 hover:text-indigo-500 transition-colors"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
