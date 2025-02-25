import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to MedVise</h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
        Your AI-powered medical assistant for accurate diagnoses and personalized health insights.
      </p>
      <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
        <Button asChild size="lg">
          <Link href="/dashboard">Get Started</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/about">Learn More</Link>
        </Button>
      </div>
    </div>
  )
}

