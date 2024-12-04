import { createClient } from "@supabase/supabase-js";
import { FreshContext } from "$fresh/server.ts";
import { CompanyRow } from "../components/CompanyRow.tsx";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_ANON_KEY")!,
);

export default async function Home(_req: Request, _ctx: FreshContext) {
  const { data, error } = await supabase.from("companies").select().order(
    "elo",
    { ascending: false },
  ).limit(20);
  if (error) {
    return <p>Sorry, we encountered an error: {error.message}</p>;
  }

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
      <ul>
        {data?.map((company) => <CompanyRow company={company} />)}
      </ul>
    </>
  );
}
