"use client"
import { useState } from "react"

export default function Page() {
  // State to track the active filter
  const [activeFilter, setActiveFilter] = useState("All")

  // Card data
  const cards = [
    {
      id: 1,
      title: "Nutrition Plan",
      category: "Nutrition",
      description: "A comprehensive nutrition plan to improve your health.",
      img: "https://imgs.search.brave.com/QB-u4e_osXtr2y0083-yM7lZ_q1B20JiYjT-tKq7nCs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/MTQxMjA1MC9waG90/by9mb29kLXdpdGgt/aGlnaC1jb250ZW50/LW9mLW9tZWdhLTMt/ZmF0cy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9WmFZc0ww/MFdqdXpDOUpUbml3/QUlyNHBYWWk4djFj/S2RzZEhGT1VfQ1RM/Yz0",
      link: "/nutrition/plans",
    },
    {
      id: 2,
      title: "Supplements Advice",
      category: "Supplements",
      description: "Find the right supplements for your health needs.",
      img: "https://imgs.search.brave.com/6OJNAWFmjdRjPqs7ODbofr8ThMMoDijsJEsBT5L0AFU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk4LzE0LzYy/LzM2MF9GXzI5ODE0/NjIxM19KMWZzaWZO/TEFud1dTZWk2MDFu/azlIakhoc2JjRzdl/UC5qcGc",
      link: "/nutrition/supplements",
    },
    {
      id: 3,
      title: "Vitamins Guide",
      category: "Vitamins",
      description: "Learn more about essential vitamins for your body.",
      img: "https://imgs.search.brave.com/Eo-RyQlH5ZX2H9EUYfgp7xfU_tFFC1GuaOyYZ7AakTA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbG9zZXVwLWlt/YWdlLXBlcnNvbnMt/aGFuZHMtaG9sZGlu/Zy1ib3R0bGUtdml0/YW1pbi1zdXBwbGVt/ZW50cy13aXRoLXZh/cmlldHktY2l0cnVz/XzY2MTA0Ny0xMDA0/OS5qcGc_c2l6ZT02/MjYmZXh0PWpwZw",
      link: "/nutrition/vitamins",
    },
    {
      id: 4,
      title: "Health Consultation",
      category: "Consultation",
      description: "Get a consultation with our health experts.",
      img: "https://imgs.search.brave.com/qdodgkr6726czqHM1jtfoGNj2L3g2Qxe_Ij6Gm1kiT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJiYXQuY29t/L2ltZy8yMzYzMjEt/ZG9jdG9yLXdhbGxw/YXBlci10b3AtZnJl/ZS1kb2N0b3ItYmFj/a2dyb3VuZC5qcGc",
      link: "/nutrition/consultation",
    },
    {
      id: 5,
      title: "Weight Gain Program",
      category: "Gain Weight",
      description: "A program designed to help you gain healthy weight.",
      img: "https://images.indianexpress.com/2024/02/obesity.jpg",
      link: "/nutrition/weight-gain",
    },
    {
      id: 6,
      title: "Weight Loss Program",
      category: "Loose Weight",
      description: "Effective ways to lose weight healthily.",
      img: "https://www.health.com/thmb/dioGlVzbu1gi8Y64hcu55rSBIQI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AddingMoreProtein-c5e715189a4b4af8999039bb2e25dc1a.jpg",
      link: "/nutrition/weight-loss",
    },
  ]

  // Function to filter cards
  const filteredCards =
    activeFilter === "All"
      ? cards
      : cards.filter((card) => card.category === activeFilter)

  return (
    <div className="px-8 md:px-36 pt-16 pb-12">
      <div className="flex space-x-6">
        <div className="flex flex-col items-start justify-start mr-24">
          <h1 className="text-[500%] absolute font-semibold leading-[6rem] z-10">
            We care about <br /> your health
          </h1>
          <div className="h-48" />
          <p className="mt-8">
            Make sure your daily nutrition is sufficient. Consult your problem
            about nutrition with us.
          </p>
          <div className="flex space-x-4 items-center justify-start mt-8">
            <button className="py-3 px-6 bg-neutral-800 rounded-full text-white">
              Get Started
            </button>
            <span className="material-symbols-outlined border p-3 rounded-full">
              north_east
            </span>
          </div>
        </div>
        <div className="w-[90%] relative">
          <img
            src="https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?w=1480&t=st=1727327068~exp=1727327668~hmac=ed52a889f764d63c6eb7f10fec3cfa5f8a2f5957c0e13a2e22ebf22095a1a86d"
            alt=""
            className="rounded-3xl"
          />
          <div className="absolute top-[-1px] left-0 w-24 h-48 bg-white rounded-tr-none rounded-bl-none rounded-3xl"></div>
        </div>
      </div>

      <div className="mt-24 flex items-center justify-start space-x-6 health-button">
        <button
          onClick={() => setActiveFilter("Nutrition")}
          className={`py-2 px-4 rounded ${activeFilter === "Nutrition" ? "bg-black text-white" : "text-black"}`}
        >
          Nutrition
        </button>
        <button
          onClick={() => setActiveFilter("Supplements")}
          className={`py-2 px-4 rounded ${activeFilter === "Supplements" ? "bg-black text-white" : "text-black"}`}
        >
          Supplements
        </button>
        <button
          onClick={() => setActiveFilter("Vitamins")}
          className={`py-2 px-4 rounded ${activeFilter === "Vitamins" ? "bg-black text-white" : "text-black"}`}
        >
          Vitamins
        </button>
        <button
          onClick={() => setActiveFilter("Consultation")}
          className={`py-2 px-4 rounded ${activeFilter === "Consultation" ? "bg-black text-white" : "text-black"}`}
        >
          Consultation
        </button>
        <button
          onClick={() => setActiveFilter("Gain Weight")}
          className={`py-2 px-4 rounded ${activeFilter === "Gain Weight" ? "bg-black text-white" : "text-black"}`}
        >
          Gain Weight
        </button>
        <button
          onClick={() => setActiveFilter("Loose Weight")}
          className={`py-2 px-4 rounded ${activeFilter === "Loose Weight" ? "bg-black text-white" : "text-black"}`}
        >
          Loose Weight
        </button>
        <button
          onClick={() => setActiveFilter("All")}
          className={`py-2 px-4 rounded ${activeFilter === "All" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
        >
          All
        </button>
      </div>
      {/* Card Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <a
            href={card.link}
            key={card.id}
            className="rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={card.img}
              alt=""
              className="object-cover h-[180px] w-full"
            />
            <div className="px-4 py-7">
              <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
              <p className="opacity-70">{card.description}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <a
            href={card.link}
            key={card.id}
            className="rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={card.img}
              alt=""
              className="object-cover h-[180px] w-full"
            />
            <div className="px-4 py-7">
              <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
              <p className="opacity-70">{card.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
