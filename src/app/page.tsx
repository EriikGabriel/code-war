import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs";
import { Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-dvh flex-col items-center justify-center p-8">
      <div className="flex h-full w-full items-center justify-around">
        <Tabs
          defaultValue="account"
          className="bg-cinder-900 text-cinder-200 h-1/2 w-[400px] rounded-2xl"
        >
          <TabsList className="bg-cinder-900 h-16 w-full gap-2 rounded-2xl p-0">
            <TabsTrigger
              value="anonymous"
              className="font-squada border-r-cinder-950 border-b-cinder-950 data-[state=active]:text-lighting-yellow-500 text-shadow cursor-pointer rounded-br border-0 border-r-[6px] border-b-[6px] p-4 text-2xl tracking-wide [text-shadow:2px_2px_0_black,-2px_-2px_0_black,2px_-2px_0_black,-2px_2px_0_black] text-shadow-black data-[state=active]:border-r-0 data-[state=active]:border-b-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Anônimo
            </TabsTrigger>
            <TabsTrigger
              value="authenticated"
              className="font-squada border-l-cinder-950 border-b-cinder-950 data-[state=active]:text-lighting-yellow-500 text-shadow cursor-pointer rounded-bl border-0 border-b-[6px] border-l-[6px] p-4 text-2xl tracking-wide [text-shadow:2px_2px_0_black,-2px_-2px_0_black,2px_-2px_0_black,-2px_2px_0_black] text-shadow-black data-[state=active]:border-b-0 data-[state=active]:border-l-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Autenticado
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="anonymous"
            className="flex flex-col items-center justify-center gap-8"
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
                <h1 className="text-cinder-200 text-center font-bold">
                  Escolha um avatar e um nickname
                </h1>
                <Input
                  type="text"
                  placeholder="Nickname"
                  className="border-cinder-950 focus-visible:border-cinder-950 placeholder:text-cinder-950 text-cinder-950 h-12 rounded-2xl border-2 bg-neutral-100 focus-visible:bg-neutral-100/80 focus-visible:ring-0 focus-visible:outline-none"
                  autoComplete="off"
                />
              </div>
            </div>
            <Button className="bg-cinder-200 hover:bg-cinder-100 focus-visible:cinder-600 h-12 w-4/6 rounded-2xl text-lg font-bold">
              <Play className="text-cinder-900 fill-cinder-900" /> Criar sala
            </Button>
          </TabsContent>
          <TabsContent
            value="authenticated"
            className="flex flex-col items-center justify-center gap-8"
          >
            Autenticado.
          </TabsContent>
        </Tabs>

        <div className="bg-cinder-900 h-[75%] w-1/4 rounded"></div>
      </div>
    </main>
  );
}
