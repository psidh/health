"use client"
import theme from "@/utils/colorPallete"
import { ThemeProvider } from "@mui/material"
import LightButton from "./LightButton"

export default function Community() {
  return (
    <>
      <div className="px-8 md:px-36 py-16 flex flex-col items-center justify-start">
        <h2 className="text-[var(--main)] text-3xl md:text-5xl my-16 font-medium text-center">
          What Do We Do?
        </h2>
        <div className="flex flex-col md:flex-row justify-between mb-20 w-full items-center space-x-12">
          <img
            src="/eat.svg"
            alt="Discover Diets"
            className="w-full my-12 md:w-[40%]"
          />
          <div className="w-full md:w-[50%]">
            <h3 className="mb-6 text-2xl font-medium">
              Discover Personalized Diets
            </h3>
            <p className="mb-6 text-lg leading-relaxed font-extralight text-neutral-500">
              Our platform provides you with tailored meal plans and delicious
              recipes designed to meet your specific health needs and goals.
              Whether you're looking to lose weight, manage a specific
              condition, or simply eat healthier, we've got you covered. Stay on
              track with helpful meal reminders and achieve your health
              ambitions.
            </p>
            <LightButton>Learn More</LightButton>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-between mb-20 w-full items-center md:space-x-12">
          <img
            src="/metric.svg"
            alt="Monitor Health Metrics"
            className="w-full my-12 md:w-[40%]"
          />
          <div className="w-full md:w-[50%]">
            <h3 className="mb-6 text-4xl font-medium">
              Monitor Your Health Metrics
            </h3>
            <p className="mb-6 text-lg leading-relaxed font-extralight text-neutral-500">
              Take control of your health by tracking your key metrics. Our
              platform provides insightful visualizations and personalized
              analysis of your health data, empowering you to make informed
              decisions about your well-being.
            </p>
            <LightButton>Learn More</LightButton>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-20 w-full items-center md:space-x-12">
          <img
            src="/expert.svg"
            alt="Connect with Experts"
            className="w-[40%]"
          />
          <div className="w-full md:w-[50%]">
            <h3 className="mb-6 text-4xl font-medium">
              Connect with Health Experts
            </h3>
            <p className="mb-6 text-lg leading-relaxed font-extralight text-neutral-500">
              Join a vibrant community of health experts and enthusiasts. Share
              your journey, ask questions, and receive valuable advice from
              professionals and peers who understand your goals. Our platform
              fosters a supportive environment for you to thrive on your health
              journey.
            </p>
            <LightButton>Learn More</LightButton>
          </div>
        </div>
      </div>
    </>
  )
}
