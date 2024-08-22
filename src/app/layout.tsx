import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./globalicon.css"
import Providers from "./Providers"

const inter = Inter({ subsets: ["latin"] })

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
      <body
        className={`dark:bg-black dark:text-white   ${inter.className} suppressHydrationWarning`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
