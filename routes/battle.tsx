import { FreshContext } from "$fresh/server.ts";
import { BattleIsland } from "../islands/BattleIsland.tsx";

export default function Battle(_req: Request, _ctx: FreshContext) {
  return (
    <>
      <img
        class="my-6"
        src="/logo.svg"
        width="128"
        height="128"
        alt="the PrestigeRank logo: a crown"
      />
      <p class="text-xl font-bold mb-8">
        battle
      </p>
      <div class="w-full h-36 flex justify-center">
        <BattleIsland />
      </div>
    </>
  );
}
