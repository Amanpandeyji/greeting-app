import { GreetingForm } from "@/components/greeting-form"
import { ExplanationSection } from "@/components/explanation-section"
import { CodeExplanation } from "@/components/code-explanation"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-3xl font-bold text-center">Greeting App</h1>
        <GreetingForm />
        <ExplanationSection />
        <CodeExplanation />
      </div>
    </main>
  )
}

