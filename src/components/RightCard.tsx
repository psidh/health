export default function RightCard() {
  return (
    <div>
      <h1 className="text-4xl font-semibold my-12">Parameters</h1>
      <img
        src="/heart.jpg"
        alt="heart"
        className="border border-neutral-400 p-4 rounded-full m-8"
      />
      <div>
        <div className="flex items-center justify-between">
          <span className="material-icon-outlined">average</span>
          <p className="font-medium text-lg">Average</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-medium"> 98</p>
          <p>BPM</p>
        </div>
      </div>
    </div>
  )
}
