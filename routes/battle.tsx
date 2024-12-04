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
        alt="the Fresh logo: a sliced lemon dripping with juice"
      />
      <p class="my-4">
        Which company has the most prestige?
      </p>
      <BattleIsland />
    </>
  );
}
