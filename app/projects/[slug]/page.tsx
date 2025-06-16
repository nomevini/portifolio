import { Button } from "@/components/ui/button"
import { ArrowLeft, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Sample project data - in a real app, this would come from a database or CMS
const projects = [
  {
    "slug": "agent",
    "title": "AI-Agent-N8N - Agente WhatsApp para Operações de Redes (Acesso privado)",
    "description": "Workflow no N8N que permite executar comandos de administração de redes de computadores via WhatsApp.",
    "image": "/agent.png",
    "link": "https://github.com/nomevini/ai-agent-n8n",
    "tags": ["N8N", "WhatsApp API", "Automação de Redes", "SSH", "Low-code"],
    "content": [
      {
        "type": "paragraph",
        "content": "O AI-Agent-N8N é um workflow criado no N8N que permite a execução de operações em equipamentos de redes de computadores a partir de comandos recebidos via WhatsApp. A solução integra automação low-code com comunicação em tempo real, facilitando o gerenciamento remoto de dispositivos de rede."
      },
      {
        "type": "heading",
        "content": "Objetivos do Projeto"
      },
      {
        "type": "paragraph",
        "content": "O objetivo central é permitir que administradores de redes possam interagir de forma rápida e segura com seus equipamentos, enviando comandos diretamente por WhatsApp e recebendo as respostas de volta em tempo real."
      },
      {
        "type": "heading",
        "content": "Funcionalidades"
      },
      {
        "type": "paragraph",
        "content": "- Recebimento de comandos via WhatsApp.\n- Interpretação de instruções com lógica customizada no N8N.\n- Execução de tarefas em equipamentos de rede como switches, roteadores e firewalls.\n- Operações como coleta de status, execução de ping, reinicialização de interfaces e muito mais.\n- Respostas automáticas com os resultados das operações executadas."
      },
      {
        "type": "heading",
        "content": "Implementação Técnica"
      },
      {
        "type": "paragraph",
        "content": "O fluxo foi construído utilizando o N8N, com integração com uma API de WhatsApp para recebimento e envio de mensagens. A execução de comandos nos equipamentos de rede é feita através de nós de execução remota, como SSH ou chamadas API quando suportado. Também é possível a inclusão de scripts externos para operações mais avançadas."
      },
      {
        "type": "paragraph",
        "content": "Toda a lógica de decisão, mapeamento de comandos e formatação das respostas foi implementada dentro do N8N, aproveitando sua flexibilidade para criar ramificações de fluxo, manipulação de dados e integrações com serviços externos."
      },
      {
        "type": "heading",
        "content": "Desafios Técnicos"
      },
      {
        "type": "paragraph",
        "content": "Garantir segurança na execução dos comandos foi um dos maiores desafios. Para isso, o agente foi configurado para aceitar mensagens apenas de números de telefone previamente autorizados. Além disso, foram implementadas validações de entrada para evitar comandos maliciosos ou inválidos."
      },
      {
        "type": "paragraph",
        "content": "Outro desafio foi o tratamento de falhas de rede e garantir que o usuário receba feedback mesmo em caso de erros de execução ou indisponibilidade dos equipamentos."
      },
      {
        "type": "heading",
        "content": "Imagens do Projeto"
      },
      {
        type: "image",
        src: "/agent-captura.png",
        alt: "Workflow do N8N",
        caption: "Workflow do N8N mostrando a integração com WhatsApp e execução de comandos",
      },
    ]
  },
  {
    slug: "data-safe",
    title: "Dafa Safe - Plataforma de acesso a dados (Web Scraping)",
    description: "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.",
    image: "/data-safe.png",
    link: "https://github.com/nomevini/data-safe-consig",
    tags: ["Next.js", "Prisma", "Stripe"],
    content: [
      {
        type: "paragraph",
        content:
          "O Data Safe é uma plataforma desenvolvida para automatizar o carregamento e o processamento em massa de planilhas contendo dados sensíveis, como CPFs. O foco do projeto está na performance, automação e escalabilidade no tratamento de grandes volumes de dados.",
      },
      {
        type: "heading",
        content: "Objetivos do Projeto",
      },
      {
        type: "paragraph",
        content:
          "O principal objetivo foi criar uma aplicação capaz de processar mais de 100.000 CPFs de forma automatizada, com extração de dados via web scraping. Também buscamos oferecer uma interface simples para upload e download de planilhas, garantindo estabilidade e rapidez em todo o processo.",
      },
      
      {
        type: "heading",
        content: "Implementação Técnica",
      },
      {
        type: "paragraph",
        content:
          "O frontend foi desenvolvido com Vite, proporcionando uma experiência leve e rápida para o usuário. No backend, utilizamos Express.js para as rotas da API, Prisma como ORM para interagir com o banco de dados, e Selenium para automação do scraping em sites externos.",
      },
      {
        type: "paragraph",
        content:
          "A aplicação permite o upload de arquivos CSV, realiza o processamento dos dados com Selenium e disponibiliza o resultado final também em CSV, pronto para ser baixado pelo usuário.",
      },
      {
        type: "paragraph",
        content:
          "Para garantir alta performance no processamento em lote, implementamos **multithreading**, permitindo que múltiplas instâncias do Selenium rodem em paralelo. Isso otimizou significativamente o tempo total de processamento dos dados.",
      },
      
      {
        type: "heading",
        content: "Desafios e Soluções",
      },
      {
        type: "paragraph",
        content:
          "Um dos principais desafios foi garantir a estabilidade e a performance durante o scraping em lote. Implementamos controle de sessões, delays configuráveis e execução paralela com multithreading para evitar bloqueios e garantir a integridade dos dados.",
      },
      {
        type: "paragraph",
        content:
          "Também foi necessário otimizar a manipulação de arquivos grandes. Para isso, utilizamos streams no backend e validações em tempo real durante o upload, assegurando a integridade dos dados antes do processamento.",
      },
    ],    
  },
  {
    slug: "anest-ai",
    title: "Anest.ai",
    description: "anest.ai é uma plataforma de estudo de anestesiologia que une conteúdo técnico (livros e questões) com uma IA especializada. Utiliza técnicas de RAG com o modelo LLaMA 70B e um banco vetorial com mais de 20 mil trechos de livros, permitindo respostas precisas e fundamentadas em conteúdo médico real.",
    image: "/anest-ai.png",
    link: "",
    tags: ["Next.js", "Node.js", "Socket.io", "Assistant-ai", "RAG", "Python", "Langchain", "Tailwind", "Fastify", "Prisma"],
    content: [
      {
        type: "paragraph",
        content:
          "O anest.ai é uma plataforma de estudos desenvolvida especialmente para profissionais e estudantes da área de anestesiologia. Ela combina materiais técnicos de alta qualidade com uma inteligência artificial especializada que responde dúvidas com precisão clínica.",
      },
      {
        type: "heading",
        content: "Funcionalidades Principais",
      },
      {
        type: "paragraph",
        content:
          "A plataforma oferece acesso a uma biblioteca digital com livros de anestesia, materiais complementares, além de um sistema de resolução de questões e um assistente inteligente baseado em IA. Os usuários podem estudar, revisar conteúdos e testar seus conhecimentos diretamente na plataforma.",
      },
      {
        type: "image",
        src: "/anest-book.png",
        alt: "Biblioteca de livros de anestesia",
        caption: "Interface da biblioteca com materiais técnicos e livros atualizados",
      },
      {
        type: "heading",
        content: "Arquitetura Técnica",
      },
      {
        type: "paragraph",
        content:
          "A plataforma utiliza um modelo LLM avançado, o LLaMA 2 com 70 bilhões de parâmetros, para responder dúvidas em linguagem natural. Ele é integrado a uma arquitetura de RAG (Retrieval-Augmented Generation), que busca e fornece contexto diretamente de um banco vetorial baseado em mais de 20 mil trechos (chunks) extraídos de livros de anestesia.",
      },
      {
        type: "paragraph",
        content:
          "A base vetorial permite que a IA localize exatamente os trechos mais relevantes dos materiais de estudo antes de formular uma resposta, garantindo precisão e confiabilidade nas interações. Essa técnica transforma a IA em uma assistente de estudos confiável e útil para casos clínicos e revisões teóricas.",
      },
      {
        type: "image",
        src: "/anest-chat.png",
        alt: "Resposta da IA com base em RAG",
        caption: "IA especializada respondendo com base nos livros da base vetorial",
      },
      {
        type: "heading",
        content: "Desenvolvimento e Tecnologias",
      },
      {
        type: "paragraph",
        content:
          "A interface da plataforma foi construída com foco em simplicidade e usabilidade. O frontend oferece acesso rápido ao conteúdo e navegação fluida. O backend gerencia as interações com o banco vetorial e a orquestração entre o sistema de busca e o modelo de linguagem.",
      },
      {
        type: "paragraph",
        content:
          "O sistema RAG foi implementado com um pipeline de chunking inteligente, indexação vetorial eficiente e consultas otimizadas para garantir que o modelo LLaMA receba apenas os trechos mais relevantes como contexto. A IA responde de forma rápida, clara e embasada em material técnico.",
      },
      {
        type: "heading",
        content: "Pesquisa com Usuários e Iterações",
      },
      {
        type: "paragraph",
        content:
          "Durante o desenvolvimento, foram conduzidas entrevistas com anestesistas, residentes e estudantes da área para entender suas dores e necessidades. Com base nesse feedback, a interface e as funcionalidades foram ajustadas para criar uma experiência intuitiva e realmente útil no dia a dia de quem estuda ou atua com anestesia.",
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
    <div className="container w-full py-12 ">
      <div className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para todos os projetos
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
                    <Image src={block.src || "/placeholder.svg"} alt={block.alt || "Image description"} fill className="object-cover" />
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
              Veja o projeto no GitHub
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
