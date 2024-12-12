import { FreshContext } from "$fresh/server.ts";
import { supabase } from "../../util/supabase.ts";

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  let { data, error } = await supabase.from("get_matchup").select();
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  if (!data) {
    return new Response("No data found", { status: 404 });
  }

  const token = crypto.randomUUID();
  ({ error } = await supabase.from("battle_tokens").insert({
    token,
    company_1: data[0].id,
    company_2: data[1].id,
  }));

  return new Response(JSON.stringify({ data, token }), { status: 200 });
};
