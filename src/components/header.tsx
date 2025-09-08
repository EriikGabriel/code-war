import Image from "next/image"

export function Header() {
  return (
    <header className="absolute left-10 top-10">
      <Image
        src="/logo.svg"
        alt="Next.js Logo"
        width={100}
        height={37}
        priority
      />
    </header>
  )
}
