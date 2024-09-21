import RightStatCard from "./RightStatCard"

export default function RightCard() {
  return (
    <div>
      <h1 className="text-4xl font-semibold my-12">Your Heart Statistics</h1>
      <img
        src="/heart.jpg"
        alt="heart"
        className="border-[24px] border-neutral-200 rounded-full m-8 w-2/3 "
      />
      <div className="flex items-center justify-center gap-x-6">
        <RightStatCard
          title="Average"
          data={98}
          icon="ecg_heart"
          what={"BPM"}
        />
        <RightStatCard
          title="Average"
          data={98}
          icon="ecg_heart"
          what={"BPM"}
        />
        <RightStatCard
          title="Average"
          data={98}
          icon="ecg_heart"
          what={"BPM"}
        />
      </div>
    </div>
  )
}
