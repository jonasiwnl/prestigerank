import { FreshContext } from "$fresh/server.ts";
import { CompanyRankings } from "../islands/CompanyRankings.tsx";
import { getSupabaseClient } from "../util/supabase.ts";

export default async function Home(req: Request, _ctx: FreshContext) {
  const userAgent = req.headers.get("user-agent") || "";
  const isMobile = userAgent.includes("Mobile");
  const searchString = isMobile
    ? ""
    : (userAgent.includes("Mac") ? " (⌘ + k)" : " (ctrl + k)");

  const supabase = getSupabaseClient();

  const { data, error } = await supabase.from("companies").select().order(
    "elo",
    { ascending: false },
  );
  if (error) {
    return <p>Sorry, we encountered an error: {error.message}</p>;
  }

  return (
    <div class="w-full">
      <div class="text-center my-8">
        <p class="text-xl font-semibold">
          rankings
        </p>
        <p class="text-sm mt-2 font-semibold">
          rankings are determined by the results of{" "}
          <a href="/battle" class="underline hover:text-primary">battles</a>
          {" "}
          and are updated immediately.
        </p>
      </div>
      <CompanyRankings data={data} searchString={searchString} />
    </div>
  );
}
