export default function Topbar() {
  return (
    <div className="flex justify-start items-center space-x-6">
      <div className="flex items-center cursor-pointer justify-between px-7 gap-2 py-3 bg-[var(--secondary)] hover:opacity-50 rounded-full transition-all duration-150">
        <h2 className="font-medium text-sm">Add Data</h2>
        <span className="material-symbols-outlined">add_task</span>
      </div>

      <div className="flex items-center cursor-pointer justify-between px-7 gap-2 py-3 bg-[var(--secondary)] hover:opacity-50 rounded-full transition-all duration-150">
        <h2 className="font-medium text-sm">Trends</h2>
        <span className="material-symbols-outlined">query_stats</span>
      </div>
      <div className="flex items-center cursor-pointer justify-between px-7 gap-2 py-3 bg-[var(--secondary)] hover:opacity-50 rounded-full transition-all duration-150">
        <h2 className="font-medium text-sm">Diet Plans</h2>
        <span className="material-symbols-outlined">restaurant</span>
      </div>
      <div className="flex items-center cursor-pointer justify-between px-7 gap-2 py-3 bg-[var(--secondary)] hover:opacity-50 rounded-full transition-all duration-150">
        <h2 className="font-medium text-sm">What&apos;s new</h2>
        <span className="material-symbols-outlined">campaign</span>
      </div>
    </div>
  )
}
