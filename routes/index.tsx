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
        <p class="text-2xl font-semibold">rankings</p>
        <p class="text-sm mt-2 font-semibold w-full md:w-3/4 mx-auto">
          which tech companies are the most prestigous to work for?
        </p>
        <p class="text-sm font-semibold w-full md:w-3/4 mx-auto">
          rankings are determined by{" "}
          <a href="/battle" class="underline hover:text-primary">battles</a>
          {" "}
          completed by users and are updated immediately.
        </p>
      </div>
      <CompanyRankings data={data} searchString={searchString} />
    </div>
  );
}
