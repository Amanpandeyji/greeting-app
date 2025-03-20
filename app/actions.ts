"use server"

// Define the state type for type safety
interface FormState {
  message: string
}

export async function greetUser(prevState: FormState, formData: FormData): Promise<FormState> {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 500))

  const name = formData.get("name")

  if (!name || typeof name !== "string" || name.trim() === "") {
    return { message: "Please enter a valid name" }
  }

  return { message: `Hello ${name}!` }
}

