import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
const inter = Manrope({ subsets: ["latin"] })
import { AuthProvider } from "@/firebase/AuthContext"

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
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
