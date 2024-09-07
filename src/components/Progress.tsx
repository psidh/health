"use client"
import { LinearProgress } from "@mui/material"
import theme from "@/utils/colorPallete"
import { ThemeProvider } from "@mui/material"

export default function Progress() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <LinearProgress variant="determinate" value={60} className="mb-6" />
      </ThemeProvider>
    </div>
  )
}
