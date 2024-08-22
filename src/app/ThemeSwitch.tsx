"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted)
    return (
      <span
        className="material-symbols-outlined"
        onClick={() => setTheme("dark")}
      >
        dark_mode
      </span>
    )

  if (resolvedTheme === "light")
    return (
      <span
        className="material-symbols-outlined"
        onClick={() => setTheme("dark")}
      >
        dark_mode
      </span>
    )

  return (
    <span
      className="material-symbols-outlined"
      onClick={() => setTheme("light")}
    >
      brightness_7
    </span>
  )
}
