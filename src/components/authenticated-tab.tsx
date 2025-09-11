"use client";

import { authClient } from "@/lib/auth-client";
import { Github } from "lucide-react";
import { Button } from "./ui/button";

export function AuthenticatedTab() {
  const handleSignIn = async () =>
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/lobby",
    });

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="flex w-1/2 flex-col gap-4">
        <h1 className="text-cinder-200 text-center text-xl font-bold">
          Faça login abaixo
        </h1>
        <p className="text-cinder-200 text-center text-sm">
          Apenas jogadores logados poderão acessar a sala
        </p>
      </div>
      <Button
        className="bg-cinder-200 hover:bg-cinder-100 focus-visible:cinder-600 h-12 w-4/6 rounded-2xl text-lg font-bold"
        onClick={handleSignIn}
      >
        <Github className="text-cinder-900 fill-cinder-900 size-6" />
        Github
      </Button>
    </div>
  );
}
