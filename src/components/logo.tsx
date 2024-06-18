import { cn } from "@lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div
      className={cn(
        "relative select-none font-squada font-bold leading-none",
        className,
      )}
    >
      <h1 className="font-outline-2 text-6xl text-torch-red-500">Code</h1>
      <h1 className="font-outline-2 absolute -left-1 top-[35%] text-4xl text-lighting-yellow-500">
        X
      </h1>
      <h1 className="font-outline-2 text-5xl leading-[30px] text-white">War</h1>
    </div>
  );
}
