import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { PT_Sans_Caption, Squada_One } from "next/font/google"
import "./globals.css"

const squadaOne = Squada_One({
  weight: "400",
  variable: "--font-squada-one",
  subsets: ["latin"],
})

const ptSansCaption = PT_Sans_Caption({
  weight: "400",
  variable: "--font-pt-sans-caption",
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
        className={cn(squadaOne.variable, ptSansCaption.variable, "min-h-dvh")}
      >
        {children}
      </body>
    </html>
  )
}
