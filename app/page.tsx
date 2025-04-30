import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import Image from "next/image"
import ExperienceItem from "@/components/experience-item"

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center">
      

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="mb-6">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary">
                    <Image src="/confident-professional.png" alt="Profile picture" fill className="object-cover" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Full Stack Developer
                </h1>
                <h2 className="text-2xl tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl/none">
                  Desenvolvedor Full-Stack | Visão computacional | LLMs
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Desenvolvedor Full Stack especializado em criar aplicações web modernas, escaláveis e focadas na melhor experiência do usuário.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/nomevini" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/nomevini/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>

                <Link href="mailto:sousav387@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-15 lg:py-10">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            🛠️  Habilidades
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="experience" className="py-12 md:py-15 lg:py-10">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            💼 Experiência
            </h2>
            <div className="max-w-3xl mx-auto">
              <ExperienceItem
                title="Senior Full Stack Developer"
                company="BRNX Tecnologia"
                period="nov 2024 - Presente"
                description="Liderando o desenvolvimento de aplicações web escaláveis, implementando arquiteturas modernas. Responsável pelo desenvolvimento de sistemas internos e automação de processos internos."
                technologies={["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"]}
              />
              <ExperienceItem
                title="Pesquisador em IA Generativa"
                company="UFPI"
                period="Set 2024 - Abr 2025"
                description="Desenvolvimento de modelo de LLm especializado em anetesia baseado em técnica de RAG (Retrieval-Augmented Generation) em banco de dados vetorial para aprimoramento de respostas de modelos OpenSource. Criação de interface e funcionalidade da aplicação para estudos diversos em anestesia."
                technologies={["React", "Fastify", "PostgreSQL", "Docker", "RAG", "Hugging Face Transformers", "FAISS", "Langchain"]}
              />
              <ExperienceItem
                title="Pesquisador em Visão e Inteligência Computacional"
                company="UFPI/CNPQ"
                period="Set 2022 - Set 2024"
                description="Desenvolvimento de uma ferramenta para contagem e rastreamento de pessoas em vídeos."
                technologies={["YOLO", "PyQt5", "Python", "Ultralytics"]}
              />
            </div>
          </div>
        </section>

        <section id="projects" className="py-5 md:py-15 lg:py-10">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">🚀 Projetos</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
                image="/digital-marketplace.png"
                link="https://github.com"
                tags={["Next.js", "Prisma", "Stripe"]}
                slug="ecommerce-platform"
              />
              <ProjectCard
                title="Task Management App"
                description="A real-time task management application with team collaboration features."
                image="/digital-taskboard.png"
                link="https://github.com"
                tags={["React", "Node.js", "Socket.io"]}
                slug="task-management-app"
              />
              <ProjectCard
                title="AI Chat Interface"
                description="An AI-powered chat interface with natural language processing capabilities."
                image="/modern-ai-interaction.png"
                link="https://github.com"
                tags={["OpenAI", "Next.js", "TailwindCSS"]}
                slug="ai-chat-interface"
              />
            </div>
          </div>
        </section>





      </main>


    </div>
  )
}
