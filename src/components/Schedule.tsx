export default function Schedule() {
  // Generate the next 12 days with day and date format
  const days = Array.from({ length: 12 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i)
    const day = date.toLocaleDateString("en-US", { weekday: "short" })
    const dayNumber = date.getDate()
    return { day, dayNumber }
  })

  return (
    <div className="my-12">
      <h1 className="text-3xl text-purple-700 my-12">Checkup Schedule</h1>

      {/* Horizontal row of dates */}
      <div className="flex space-x-4 mb-8">
        {days.map(({ day, dayNumber }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-purple-200 text-purple-900 p-2 rounded-lg "
          >
            <span className="text-lg font-semibold">{day}</span>
            <span className="text-2xl font-bold">{dayNumber}</span>
          </div>
        ))}
      </div>

      {/* Doctor cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="bg-purple-200 p-6 rounded-lg ">
          <h2 className="text-xl text-purple-800 font-semibold mb-2">
            Dr. Jane Doe
          </h2>
          <p className="text-purple-700">Cardiologist</p>
          <p className="text-purple-600">Available: 10:00 AM - 2:00 PM</p>
          <p className="text-purple-600">Location: City Hospital</p>
        </div>
        <div className="bg-purple-200 p-6 rounded-lg ">
          <h2 className="text-xl text-purple-800 font-semibold mb-2">
            Dr. John Smith
          </h2>
          <p className="text-purple-700">General Practitioner</p>
          <p className="text-purple-600">Available: 1:00 PM - 5:00 PM</p>
          <p className="text-purple-600">Location: purple Clinic</p>
        </div>
      </div>

      {/* Exercise table */}
      <h2 className="text-2xl text-purple-700 mb-4">Exercise Log</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-purple-300 text-purple-900">
            <th className="py-3 px-4 text-left">Category</th>
            <th className="py-3 px-4 text-left">Date</th>
            <th className="py-3 px-4 text-left">Duration</th>
            <th className="py-3 px-4 text-left">Calories Burned</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-purple-100 text-purple-900">
            <td className="py-3 px-4">Running</td>
            <td className="py-3 px-4">12 Sep 2024</td>
            <td className="py-3 px-4">30 mins</td>
            <td className="py-3 px-4">300</td>
          </tr>
          <tr className="bg-purple-50 text-purple-900">
            <td className="py-3 px-4">Cycling</td>
            <td className="py-3 px-4">11 Sep 2024</td>
            <td className="py-3 px-4">45 mins</td>
            <td className="py-3 px-4">400</td>
          </tr>
          <tr className="bg-purple-100 text-purple-900">
            <td className="py-3 px-4">Yoga</td>
            <td className="py-3 px-4">10 Sep 2024</td>
            <td className="py-3 px-4">60 mins</td>
            <td className="py-3 px-4">180</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
