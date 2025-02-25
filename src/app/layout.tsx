import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MedVise",
  description: "Your AI-powered medical assistant",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'