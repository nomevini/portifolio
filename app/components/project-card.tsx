import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  slug?: string
}

export default function ProjectCard({ title, description, image, link, tags, slug }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={slug ? `/projects/${slug}` : "#"} className="block">
        <div className="relative aspect-video">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={slug ? `/projects/${slug}` : "#"} className="block hover:underline">
          <h3 className="font-semibold text-xl mb-2">{title}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
          <Github className="h-4 w-4" />
          GitHub
        </Link>
        {slug && (
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            View details
            <ArrowRight className="h-3 w-3" />
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
