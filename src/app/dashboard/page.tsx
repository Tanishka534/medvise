"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  const [symptoms, setSymptoms] = useState("")
  const [diagnosis, setDiagnosis] = useState("")
  const [recommendations, setRecommendations] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/analyze-symptoms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptoms }),
      })
      const data = await response.json()
      setDiagnosis(data.diagnosis)
      setRecommendations(data.recommendations)
    } catch (error) {
      console.error("Error analyzing symptoms:", error)
      setDiagnosis("An error occurred while analyzing your symptoms. Please try again.")
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Health Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Symptom Checker</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Textarea
              placeholder="Describe your symptoms in detail..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="min-h-[100px]"
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Analyze Symptoms</Button>
          </CardFooter>
        </form>
      </Card>
      {diagnosis && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>AI Diagnosis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{diagnosis}</p>
            {recommendations.length > 0 && (
              <>
                <h3 className="text-lg font-semibold mb-2">Recommendations:</h3>
                <ul className="list-disc list-inside">
                  {recommendations.map((rec, index) => (
                    <li key={index} className="text-gray-600">
                      {rec}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

