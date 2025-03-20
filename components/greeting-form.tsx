"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { greetUser } from "@/app/actions"
import { useActionState } from "react"

// Define the state type for type safety
interface FormState {
  message: string
}

const initialState: FormState = {
  message: "",
}

export function GreetingForm() {
  const [state, formAction, pending] = useActionState(greetUser, initialState)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enter Your Name</CardTitle>
      </CardHeader>
      <form action={formAction}>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Input type="text" name="name" placeholder="Your name" required className="w-full" />
            </div>
            {state.message && (
              <div className="rounded-md bg-primary/10 p-4">
                <p className="text-center font-medium">{state.message}</p>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "Submitting..." : "Submit"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

