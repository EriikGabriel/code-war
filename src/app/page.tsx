import Image from "next/image"

export default function Home() {
  return (
    <main className="flex h-dvh flex-col items-center justify-center">
      <Image
        src="/logo.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  )
}
