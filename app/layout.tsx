import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React
import Link from "next/link"
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nomevini - Desenvolvedor Full Stack",
  description: "Veja como eu estou modificando o mundo",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased flex flex-col items-center", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <header className=" px-10 flex items-center justify-center sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-center">
              <div className="mr-4 hidden md:flex">
                <Link className="mr-6 flex items-center space-x-2" href="/">
                  <span className="hidden font-bold sm:inline-block">nomevini</span>
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                  <Link href="#about" className="transition-colors hover:text-foreground/80">
                    Sobre
                  </Link>
                  <Link href="#projects" className="transition-colors hover:text-foreground/80">
                    Projetos
                  </Link>
                </nav>
              </div>
              <a className="ml-auto" href="https://drive.google.com/file/d/1-G9LlC2clUFLNV_Vk1BISZ_DSPd9ppcS/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="ml-auto">
                  Resume
                </Button>
              </a>
            </div>
          </header>

          {children}
          <footer className="border-t">
            <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
              <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 nomevini. Todos os direitos reservados.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
