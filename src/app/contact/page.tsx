import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <Input id="name" name="name" type="text" required className="mt-1" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input id="email" name="email" type="email" required className="mt-1" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <Textarea id="message" name="message" rows={4} required className="mt-1" />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  )
}

