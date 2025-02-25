import { NextResponse } from "next/server"
import { createWorker } from "tesseract.js"
import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export async function POST(req: Request) {
  const formData = await req.formData()
  const image = formData.get("image") as File

  if (!image) {
    return NextResponse.json({ error: "No image provided" }, { status: 400 })
  }

  try {
    // Perform OCR
    const worker = await createWorker("eng")
    const {
      data: { text },
    } = await worker.recognize(await image.arrayBuffer())
    await worker.terminate()

    // Use AI to interpret the OCR result
    const { text: interpretation } = await generateText({
      model: openai("gpt-4-turbo"),
      prompt: `Interpret this prescription OCR result and format it nicely: ${text}`,
    })

    return NextResponse.json({ text: interpretation })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Failed to process image" }, { status: 500 })
  }
}

