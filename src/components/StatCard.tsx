import React from "react"
import RightCard from "./RightCard"
import Schedule from "./Schedule"

export default function StatCard(props: {
  title: string
  data: number
  icon: string
  change: number
  change_icon: string
  change_percentage: number
}) {
  return (
    <div className="flex flex-col items-start justify-start rounded-xl border border-neutral-300 p-4">
      <div className="flex items-center justify-between space-x-4 mb-4">
        {/* Title and Icon */}
        <span className="material-symbols-outlined">{props.icon}</span>
        <p className="text-xl font-medium">{props.title}</p>
      </div>

      <div className="flex justify-between items-end space-x-6">
        {/* Percentage */}
        <p className="text-3xl font-semibold">{props.data}</p>

        {/* Change and Change Percentage */}
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
