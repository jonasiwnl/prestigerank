import { FreshContext } from "$fresh/server.ts";
import { supabase } from "../../util/supabase.ts";

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const { data, error } = await supabase.from("get_matchup").select();
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  return new Response(JSON.stringify(data));
};
