import Community from "@/components/Community"
import Review from "@/components/Review"
export default function Home() {
  return (
    <>
      <div className="px-36 pt-24 flex justify-between items-center mb-32">
        <div className="max-w-[60%]">
          <h1 className="text-6xl font-semibold mb-6">
            Revolutionizing Health Monitoring
            <br />
            <span className="font-light text-xl">
              with Real-Time Data Analytics
            </span>
          </h1>
          <p className="font-light mb-6 text-xl w-[70%]">
            Effortlessly track, analyze, and improve patient health through
            <span className="mx-2 italic text-violet-600">real-time</span> data
            collection, comprehensive reports, and personalized diet plans.
          </p>
          <button className="px-6 py-2 bg-purple-600 text-white">
            Get Started
          </button>
        </div>
        <img src="/doctor.svg" alt="" className="w-[40%]" />
      </div>
      <Community />
      <Review />
    </>
  )
}
