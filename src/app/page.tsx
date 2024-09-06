import Community from "@/components/Community"
import Review from "@/components/Review"
export default function Home() {
  return (
    <>
      <div className="px-8 md:px-36 pt-24 flex md:flex-row flex-col-reverse  justify-between items-center mb-32">
        <div className="w-full md:max-w-[60%]">
          <h1 className="text-4xl text-center w-full md:text-6xl font-semibold mb-6">
            Revolutionizing Health Monitoring
            <br />
            <span className="font-light text-xl">
              with Real-Time Data Analytics
            </span>
          </h1>
          <p className="font-light mb-6 text-xl md:w-[70%] text-justify w-full">
            Effortlessly track, analyze, and improve patient health through
            <span className="mx-2 italic text-violet-600">real-time</span> data
            collection, comprehensive reports, and personalized diet plans.
          </p>
          <button className="px-6 py-2 bg-purple-600 text-white">
            Get Started
          </button>
        </div>
        <img src="/doctor.svg" alt="" className="w-[40%]  mb-12 md:mb-0" />
      </div>
      <Community />
      <Review />
    </>
  )
}
