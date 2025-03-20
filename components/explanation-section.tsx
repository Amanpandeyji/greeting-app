import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ExplanationSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>How It Works</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">Server Actions</h3>
          <p className="text-sm text-muted-foreground">
            This app uses Next.js Server Actions to process form submissions on the server. When you submit your name, a
            server-side function processes the data and returns a greeting.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">React State Management</h3>
          <p className="text-sm text-muted-foreground">
            The form uses React's useActionState hook to manage the form state and handle the server response. This
            provides a seamless experience with loading states and error handling.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Shadcn UI Components</h3>
          <p className="text-sm text-muted-foreground">
            The UI is built with Shadcn UI components, providing a clean and modern design with minimal effort.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

