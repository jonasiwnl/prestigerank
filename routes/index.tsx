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
      <div class="text-center my-8">
        <p class="text-xl font-semibold">
          which company has the most prestige?
        </p>
        <p class="text-sm mt-2 font-semibold">
          rankings are determined by battles. if you think they're wrong, then vote!
        </p>
      </div>
      <CompanyRankings data={data} />
    </div>
  );
}
