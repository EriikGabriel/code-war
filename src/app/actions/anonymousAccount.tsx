"use server";

import { cookies } from "next/headers";

type AnonymousAccountType = {
  nickname: string;
};

export async function setAnonymousAccount(account: AnonymousAccountType) {
  const cookieStore = await cookies();

  cookieStore.set("@codewar:account", JSON.stringify(account), {
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });
}

export async function clearAnonymousAccount() {
  const cookieStore = await cookies();

  cookieStore.delete("@codewar:account");
}

export async function getAnonymousAccount() {
  const cookieStore = await cookies();
  const account = cookieStore.get("@codewar:account")?.value;

  if (!account) return null;

  try {
    return JSON.parse(account) as AnonymousAccountType;
  } catch {
    return null;
  }
}
