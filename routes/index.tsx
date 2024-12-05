import { FreshContext } from "$fresh/server.ts";
import { CompanyRow } from "../components/CompanyRow.tsx";
import { supabase } from "../util/supabase.ts";
import { Company } from "../util/types.ts";

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
        {data?.map((company: Company) => (
          <CompanyRow company={company} showElo={true} />
        ))}
      </ul>
    </>
  );
}
