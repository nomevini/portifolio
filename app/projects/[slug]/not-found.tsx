import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ProjectNotFound() {
  return (
    <div className="container max-w-4xl py-24 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
      <p className="text-muted-foreground mb-8">
        Sorry, the project you're looking for doesn't exist or has been removed.
      </p>
      <Link href="/#projects">
        <Button variant="outline" className="inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to all projects
        </Button>
      </Link>
    </div>
  )
}
