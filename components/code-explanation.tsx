import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code } from "lucide-react"

export function CodeExplanation() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2">
        <Code className="h-5 w-5" />
        <CardTitle>Code Explanation</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="server-actions">
            <AccordionTrigger>Server Actions</AccordionTrigger>
            <AccordionContent className="space-y-2">
              <p>
                Server Actions are a Next.js feature that allows you to run code on the server directly from your
                components.
              </p>
              <div className="rounded-md bg-muted p-3 font-mono text-sm">
                <p className="text-muted-foreground">{"// app/actions.ts"}</p>
                <p>{"'use server'"}</p>
                <p>{"async function greetUser(prevState, formData) {"}</p>
                <p className="pl-4">{"const name = formData.get('name')"}</p>
                <p className="pl-4">{"return { message: `Hello ${name}!` }"}</p>
                <p>{"}"}</p>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                The <code>'use server'</code> directive marks this function as a server action. When the form is
                submitted, the form data is automatically serialized and sent to the server. The server processes the
                data and returns a response that's used to update the UI.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="shadcn-components">
            <AccordionTrigger>Shadcn UI Components</AccordionTrigger>
            <AccordionContent className="space-y-2">
              <p>This application uses several Shadcn UI components:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Card</strong>: Used for containing content in visually distinct sections
                </li>
                <li>
                  <strong>Input</strong>: Provides a styled text input field for user data entry
                </li>
                <li>
                  <strong>Button</strong>: Offers a consistent, accessible button with loading states
                </li>
                <li>
                  <strong>Accordion</strong>: Creates collapsible sections for organizing content
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Shadcn UI provides accessible, customizable components that follow best practices and can be easily
                styled with Tailwind CSS.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="nextjs-features">
            <AccordionTrigger>Next.js 15.1 Features</AccordionTrigger>
            <AccordionContent className="space-y-2">
              <p>This application leverages several key Next.js 15.1 features:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Server Actions</strong>: Process form submissions on the server without API routes
                </li>
                <li>
                  <strong>useActionState</strong>: A React hook for managing form state with server actions
                </li>
                <li>
                  <strong>App Router</strong>: Provides file-based routing with improved performance
                </li>
                <li>
                  <strong>Client/Server Components</strong>: Automatic code splitting between client and server
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Next.js 15.1 improves on the React Server Components paradigm, offering better performance and developer
                experience with simplified data fetching and form handling.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="data-flow">
            <AccordionTrigger>Data Flow</AccordionTrigger>
            <AccordionContent className="space-y-2">
              <p>Here's how data flows through the application:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>User enters their name in the input field and clicks submit</li>
                <li>The form data is captured and sent to the server action</li>
                <li>The server action processes the data and returns a response</li>
                <li>The useActionState hook updates the UI with the response</li>
                <li>The greeting message is displayed to the user</li>
              </ol>
              <p className="text-sm text-muted-foreground mt-2">
                This pattern eliminates the need for separate API routes and client-side fetch calls, simplifying the
                development process while maintaining a clear separation of concerns.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

