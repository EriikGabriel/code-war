import { getAnonymousAccount } from "../actions/anonymousAccount";

export default async function Lobby() {
  const anonymousAccount = await getAnonymousAccount();

  const data = anonymousAccount;

  return (
    <main className="flex h-dvh flex-col items-center justify-center p-8">
      <h1 className="font-squada text-4xl">Lobby</h1>
      <p>{data?.nickname}</p>
    </main>
  );
}
