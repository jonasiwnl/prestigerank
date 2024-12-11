import { FreshContext } from "$fresh/server.ts";
import { supabase } from "../../util/supabase.ts";

export const handler = async (
  req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const { name, website, levels_url } = await req.json();

  const { error } = await supabase.from("requests").insert({
    name,
    website,
    levels_url,
  });
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  return new Response(JSON.stringify({ error: null }), { status: 200 });
};
