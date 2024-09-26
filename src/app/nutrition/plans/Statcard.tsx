import {
  FaWeightHanging,
  FaRulerVertical,
  FaChartLine,
  FaHeart,
  FaTint,
  FaRunning,
  FaAppleAlt,
} from "react-icons/fa"

export default function StatCard() {
  return (
    <section className="pb-12">
      <h2 className="text-4xl font-bold mb-8">Current Health Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Weight Card */}
        <div className="bg-green-900 text-white p-6 rounded-lg flex items-center">
          <FaWeightHanging className="text-2xl mr-4" />
          <div>
            <p className="text-lg">Weight</p>
            <p className="text-2xl font-semibold">85 kg</p>
          </div>
        </div>

        {/* Height Card */}
        <div className="bg-green-200 p-6 rounded-lg flex items-center">
          <FaRulerVertical className="text-2xl mr-4" />
          <div>
            <p className="text-lg">Height</p>
            <p className="text-2xl font-semibold">180 cm</p>
          </div>
        </div>

        {/* BMI Card */}
        <div className="bg-neutral-100 p-6 rounded-lg flex items-center">
          <FaChartLine className="text-2xl mr-4" />
          <div>
            <p className="text-lg">BMI</p>
            <p className="text-2xl font-semibold">26.2</p>
          </div>
        </div>

        {/* Blood Pressure Card */}
        <div className="bg-neutral-100 p-6 rounded-lg flex items-center">
          <FaHeart className="text-2xl mr-4" />
          <div>
            <p className="text-lg">Blood Pressure</p>
            <p className="text-2xl font-semibold">135/90 mmHg</p>
          </div>
        </div>

        {/* Cholesterol Card */}
        <div className="bg-neutral-100 p-6 rounded-lg flex items-center">
          <FaTint className="text-2xl mr-4" />
          <div>
            <p className="text-lg">Cholesterol</p>
            <p className="text-2xl font-semibold">220 mg/dL</p>
          </div>
        </div>

        {/* Blood Sugar Card */}
        <div className="bg-neutral-100 p-6 rounded-lg flex items-center">
          <FaAppleAlt className="text-2xl mr-4" />
          <div>
            <p className="text-lg">Blood Sugar</p>
            <p className="text-2xl font-semibold">110 mg/dL</p>
          </div>
        </div>

        {/* Activity Level Card */}
        <div className="bg-neutral-100 p-6 rounded-lg flex items-center">
          <FaRunning className="text-2xl mr-4" />
          <div>
            <p className="text-lg">Activity Level</p>
            <p className="text-2xl font-semibold">Low</p>
          </div>
        </div>

        {/* Caloric Intake Card */}
        <div className="bg-neutral-100 p-6 rounded-lg flex items-center">
          <FaAppleAlt className="text-2xl mr-4" />
          <div>
            <p className="text-lg">Daily Caloric Intake</p>
            <p className="text-2xl font-semibold">2500 kcal</p>
          </div>
        </div>
      </div>
    </section>
  )
}
