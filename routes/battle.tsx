import { FreshContext } from "$fresh/server.ts";
import { BattleIsland } from "../islands/BattleIsland.tsx";

export default function Battle(_req: Request, _ctx: FreshContext) {
  return (
    <>
      <div class="mt-8 mb-6 text-center w-full">
        <p class="text-2xl font-semibold">battle</p>
        <p class="text-sm font-semibold mt-2 w-full md:w-3/4 mx-auto">
          choose which company you think is more prestigious.
        </p>
      </div>
      <div class="w-full h-36 flex justify-center">
        <BattleIsland />
      </div>
    </>
  );
}
