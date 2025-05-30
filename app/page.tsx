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
                    <Image src="/vinicius.jpeg" alt="Profile picture" fill className="object-cover" />
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
                title="Desenvolvedor FullStack Junior"
                company="BRNX Tecnologia"
                period="nov 2024 - Presente"
                description="Liderando o desenvolvimento de aplicações web escaláveis, implementando arquiteturas modernas. Responsável pelo desenvolvimento de sistemas internos e automação de processos internos."
                technologies={["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "LLMs", "n8n"]}
              />
              <ExperienceItem
                title="Pesquisador em IA Generativa"
                company="UFPI"
                period="Set 2024 - Abr 2025"
                description="Desenvolvimento de modelo de LLM especializado em anetesia baseado em técnica de RAG (Retrieval-Augmented Generation) em banco de dados vetorial para aprimoramento de respostas de modelos OpenSource. Criação de interface e funcionalidade da aplicação para estudos diversos em anestesia."
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
                title="Anest.AI"
                description="anest.ai é uma plataforma de estudo de anestesiologia que une conteúdo técnico (livros e questões) com uma IA especializada. Utiliza técnicas de RAG com o modelo LLaMA 70B e um banco vetorial com mais de 20 mil trechos de livros, permitindo respostas precisas e fundamentadas em conteúdo médico real."
                image="/anest-ai.png"
                link=""
                tags={["Next.js", "Node.js", "Socket.io", "Assistant-ai", "RAG", "Python", "Langchain", "Tailwind", "Fastify", "Prisma"]}
                slug="anest-ai"
              />
              <ProjectCard
                title="Dafa Safe - Plataforma de acesso a dados (Web Scraping)"
                description="Sistema web para upload e processamento de planilhas .csv com mais de 100.000 CPFs. Utiliza Selenium para web scraping automatizado e exporta os dados enriquecidos em novos arquivos .csv. Desenvolvido com Next.js, Express, Prisma e Selenium."
                image="/data-safe.png"
                link="https://github.com/nomevini/data-safe-consig"
                tags={["Next.js", "Prisma", "PostgreSQL", "Selenium", "Typescript", "Express.js"]}
                slug="data-safe"
              />
              
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
