import { AnonymousTab } from "@/components/anonymous-tab";
import { AuthenticatedTab } from "@/components/authenticated-tab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs";

export default function Home() {
  return (
    <main className="flex h-dvh flex-col items-center justify-center p-8">
      <div className="flex h-full w-full items-center justify-around">
        <Tabs
          defaultValue="anonymous"
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
          <TabsContent value="anonymous">
            <AnonymousTab />
          </TabsContent>
          <TabsContent value="authenticated">
            <AuthenticatedTab />
          </TabsContent>
        </Tabs>

        <div className="bg-cinder-900 h-[75%] w-1/4 rounded"></div>
      </div>
    </main>
  );
}
