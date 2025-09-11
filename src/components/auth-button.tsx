"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@ui/button";
import { Github } from "lucide-react";

interface AuthButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  oauthProvider?: "google" | "github" | "facebook";
}

export function AuthButton({
  oauthProvider = "github",
  ...props
}: AuthButtonProps) {
  const handleSignIn = async () =>
    await authClient.signIn.social({
      provider: oauthProvider,
      callbackURL: "/lobby",
    });

  return (
    <Button
      className="bg-cinder-200 hover:bg-cinder-100 focus-visible:cinder-600 h-12 w-4/6 rounded-2xl text-lg font-bold"
      onClick={handleSignIn}
      {...props}
    >
      {oauthProvider === "github" && (
        <>
          <Github className="text-cinder-900 fill-cinder-900 size-6" />
          Github
        </>
      )}
    </Button>
  );
}
