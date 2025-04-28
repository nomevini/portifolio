import { Button } from "@/components/ui/button"
import { ArrowLeft, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Sample project data - in a real app, this would come from a database or CMS
const projects = [
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.",
    image: "/digital-marketplace.png",
    link: "https://github.com",
    tags: ["Next.js", "Prisma", "Stripe"],
    content: [
      {
        type: "paragraph",
        content:
          "This e-commerce platform was built to provide a seamless shopping experience with modern technologies. The project focuses on performance, user experience, and scalability.",
      },
      {
        type: "heading",
        content: "Project Goals",
      },
      {
        type: "paragraph",
        content:
          "The main goal was to create a platform that could handle thousands of products while maintaining fast load times and a smooth user experience. We also wanted to ensure that the checkout process was as frictionless as possible.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800&query=e-commerce dashboard",
        alt: "E-commerce Dashboard",
        caption: "Admin dashboard showing sales analytics",
      },
      {
        type: "heading",
        content: "Technical Implementation",
      },
      {
        type: "paragraph",
        content:
          "The platform was built using Next.js for the frontend, with server components for improved performance. We used Prisma as our ORM to interact with a PostgreSQL database, which stores product information, user data, and order history.",
      },
      {
        type: "paragraph",
        content:
          "For payment processing, we integrated with Stripe to handle secure transactions. This allowed us to implement features like saved payment methods, subscription billing, and instant payouts to sellers.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800&query=e-commerce product page",
        alt: "Product Page",
        caption: "Product detail page with dynamic pricing and inventory",
      },
      {
        type: "heading",
        content: "Challenges and Solutions",
      },
      {
        type: "paragraph",
        content:
          "One of the biggest challenges was optimizing image loading for product galleries. We implemented a custom image component with lazy loading and progressive enhancement to ensure fast page loads even with hundreds of product images.",
      },
      {
        type: "paragraph",
        content:
          "Another challenge was handling cart synchronization across devices. We solved this by implementing a hybrid approach that uses local storage for guest users and database synchronization for logged-in users.",
      },
    ],
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description: "A real-time task management application with team collaboration features.",
    image: "/digital-taskboard.png",
    link: "https://github.com",
    tags: ["React", "Node.js", "Socket.io"],
    content: [
      {
        type: "paragraph",
        content:
          "This task management application was designed to help teams collaborate effectively on projects. With real-time updates and intuitive interfaces, it streamlines workflow and improves productivity.",
      },
      {
        type: "heading",
        content: "Key Features",
      },
      {
        type: "paragraph",
        content:
          "The application includes features like drag-and-drop task organization, real-time collaboration, automated notifications, and detailed progress tracking.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800&query=kanban board",
        alt: "Kanban Board",
        caption: "Kanban board view with drag-and-drop functionality",
      },
      {
        type: "heading",
        content: "Technical Stack",
      },
      {
        type: "paragraph",
        content:
          "The frontend was built with React and uses a custom state management solution for optimal performance. The backend runs on Node.js with Express, and we used Socket.io to enable real-time updates across all connected clients.",
      },
      {
        type: "paragraph",
        content:
          "For data persistence, we chose MongoDB due to its flexibility with document structures, which allowed us to easily adapt to changing requirements during development.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800&query=task detail view",
        alt: "Task Detail View",
        caption: "Detailed task view with comments and activity log",
      },
      {
        type: "heading",
        content: "User Research and Iteration",
      },
      {
        type: "paragraph",
        content:
          "We conducted extensive user research before and during development, which led to several iterations of the interface. This user-centered approach helped us create an intuitive experience that required minimal onboarding.",
      },
    ],
  },
  {
    slug: "ai-chat-interface",
    title: "AI Chat Interface",
    description: "An AI-powered chat interface with natural language processing capabilities.",
    image: "/modern-ai-interaction.png",
    link: "https://github.com",
    tags: ["OpenAI", "Next.js", "TailwindCSS"],
    content: [
      {
        type: "paragraph",
        content:
          "This AI chat interface leverages advanced language models to provide intelligent responses to user queries. The project demonstrates how AI can be integrated into web applications to enhance user experiences.",
      },
      {
        type: "heading",
        content: "AI Integration",
      },
      {
        type: "paragraph",
        content:
          "The application uses the AI SDK to connect with OpenAI's models, allowing for natural conversations with users. We implemented streaming responses for a more dynamic interaction experience.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800&query=AI chat conversation",
        alt: "AI Chat Conversation",
        caption: "Example conversation with the AI assistant",
      },
      {
        type: "heading",
        content: "User Interface Design",
      },
      {
        type: "paragraph",
        content:
          "The chat interface was designed to be clean and intuitive, with clear visual cues to distinguish between user messages and AI responses. We also implemented typing indicators and message status updates to make the interaction feel more natural.",
      },
      {
        type: "paragraph",
        content:
          "The UI is fully responsive and works seamlessly across devices, from mobile phones to desktop computers.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800&query=AI chat mobile interface",
        alt: "Mobile Chat Interface",
        caption: "Mobile-optimized version of the chat interface",
      },
      {
        type: "heading",
        content: "Performance Optimizations",
      },
      {
        type: "paragraph",
        content:
          "To ensure fast response times, we implemented several optimizations including request caching, response streaming, and efficient state management. This resulted in a chat experience that feels instantaneous even on slower connections.",
      },
    ],
  },
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all projects
        </Link>
      </div>

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {project.content.map((block, index) => {
            if (block.type === "paragraph") {
              return <p key={index}>{block.content}</p>
            }
            if (block.type === "heading") {
              return (
                <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                  {block.content}
                </h2>
              )
            }
            if (block.type === "image") {
              return (
                <figure key={index} className="my-8">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image src={block.src || "/placeholder.svg"} alt={block.alt} fill className="object-cover" />
                  </div>
                  {block.caption && (
                    <figcaption className="text-center text-sm text-muted-foreground mt-2">{block.caption}</figcaption>
                  )}
                </figure>
              )
            }
            return null
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Link href={project.link} target="_blank">
            <Button className="inline-flex items-center gap-2">
              <Github className="h-4 w-4" />
              View Project on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
