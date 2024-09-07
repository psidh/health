import React from "react"

export default function LightButton({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <button className="rounded inline-flex text-white bg-purple-600  py-3 px-8 font-medium hover:shadow-none shadow-none">
      {children}
    </button>
  )
}
