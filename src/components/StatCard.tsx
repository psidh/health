export default function StatCard(props: {
  title: string
  data: number
  icon: string
  change: number
  change_icon: string
  change_percentage: number
}) {
  return (
    <div className="flex flex-col items-start justify-start rounded-xl border border-neutral-300 p-3">
      <div className="flex items-center justify-between space-x-2 mb-4">
        <span className="material-symbols-outlined">{props.icon}</span>
        <p className="text-lg font-medium">{props.title}</p>
      </div>

      <div className="flex justify-between items-end space-x-6">
        <p className="text-3xl font-semibold">{props.data}</p>
        <div className="flex items-center justify-start">
          <p>{props.change}%</p>
          <div className="flex items-center justify-between space-x-2">
            <span className="material-symbols-outlined">
              {props.change_icon}
            </span>
            <p>{props.change_percentage}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
