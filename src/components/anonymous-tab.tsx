"use client";

import { setAnonymousAccount } from "@/app/actions/anonymousAccount";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Play } from "lucide-react";
import Image from "next/image";

export function AnonymousTab() {
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData(e.target as HTMLFormElement);
    const nickname = data.get("nickname")?.toString().trim();

    if (!nickname) return;

    await setAnonymousAccount({ nickname });

    window.location.href = "/lobby";
  };

  return (
    <form
      className="flex h-full flex-col items-center justify-center gap-8"
      onSubmit={handleSignIn}
    >
      <div className="flex items-center justify-center gap-4">
        <div className="w-fit">
          <div className="border-torch-red-500 flex items-center justify-center rounded-full border-4">
            <Image
              alt="Avatar"
              className="size-28 rounded-full border-8 border-transparent"
              height={100}
              width={100}
              src="https://github.com/shadcn.png"
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-4">
          <h1 className="text-cinder-200 text-center text-xl font-bold">
            Escolha um avatar e um nickname
          </h1>
          <Input
            type="text"
            placeholder="Nickname"
            className="border-cinder-950 focus-visible:border-cinder-950 placeholder:text-cinder-950 text-cinder-950 h-12 rounded-2xl border-2 bg-neutral-100 focus-visible:bg-neutral-100/80 focus-visible:ring-0 focus-visible:outline-none"
            autoComplete="off"
            name="nickname"
            required
          />
        </div>
      </div>
      <Button className="bg-cinder-200 hover:bg-cinder-100 focus-visible:cinder-600 h-12 w-4/6 rounded-2xl text-lg font-bold">
        <Play className="text-cinder-900 fill-cinder-900 size-6" />
        Criar sala
      </Button>
    </form>
  );
}
