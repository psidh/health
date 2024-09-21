export default function RightStatCard(props: {
  title: string
  data: number
  icon: string
  what: string
}) {
  return (
    <div className="flex flex-col items-start justify-start rounded-xl border border-neutral-300 p-2">
      <div className="flex items-center justify-between space-x-1 mb-4">
        <span className="material-symbols-outlined">{props.icon}</span>
        <p className="text-xl font-medium">{props.title}</p>
      </div>

      <div className="flex justify-between items-end space-x-2">
        <p className="text-2xl font-semibold">{props.data}</p>
        <div className="flex items-center justify-start">
          <p>{props.what}</p>
        </div>
      </div>
    </div>
  )
}
