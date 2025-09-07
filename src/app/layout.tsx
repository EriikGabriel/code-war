import { cn } from "@lib/utils"
import type { Metadata } from "next"
import { Geist_Mono, PT_Sans_Caption, Squada_One } from "next/font/google"
import "./globals.css"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const squadaOne = Squada_One({
  weight: "400",
  variable: "--font-squada-one",
  subsets: ["latin"],
})

const ptSansCaption = PT_Sans_Caption({
  weight: "400",
  variable: "--font-pt-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Code War",
  description: "Batalha entre programadores",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          squadaOne.variable,
          ptSansCaption.variable,
          geistMono.variable,
          "antialiased min-h-dvh font-pt-sans"
        )}
      >
        {children}
      </body>
    </html>
  )
}
