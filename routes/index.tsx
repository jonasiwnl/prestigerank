import { FreshContext } from "$fresh/server.ts";
import { CompanyRankings } from "../islands/CompanyRankings.tsx";
import { getSupabaseClient } from "../util/supabase.ts";

export default async function Home(_req: Request, _ctx: FreshContext) {
  const supabase = getSupabaseClient();

  const { data, error } = await supabase.from("companies").select().order(
    "elo",
    { ascending: false },
  ); // .limit(20);
  if (error) {
    return <p>Sorry, we encountered an error: {error.message}</p>;
  }

  return (
    <div class="w-full">
      <img
        class="my-6"
        src="/logo.svg"
        width="128"
        height="128"
        alt="the PrestigeRank logo: a crown"
      />
      <p class="my-4 font-semibold">
        which company has the most prestige?
      </p>
      <CompanyRankings data={data} />
    </div>
  );
}
