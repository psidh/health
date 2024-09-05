import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
const inter = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Health Matrix",
  description:
    "Health matrix for your one stop solution to your medical needs.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
