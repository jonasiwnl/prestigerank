import { FreshContext } from "$fresh/server.ts";
import { getSupabaseClient } from "../../util/supabase.ts";

const ALLOWED_REQUESTS_PER_HOUR = 3000;
const ONE_HOUR_IN_MILLISECONDS = 60 * 60 * 1000;

const jsonResponse = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const handler = async (
  _req: Request,
  ctx: FreshContext,
): Promise<Response> => {
  const ip = ctx.remoteAddr.hostname;
  const supabase = getSupabaseClient();

  // ** RATE LIMITING ** //
  const { count, error } = await supabase.from("battle_tokens")
    .select("*", { count: "exact", head: true }).eq(
      "ip",
      ip,
    ).gte(
      "created_at",
      (new Date(Date.now() - ONE_HOUR_IN_MILLISECONDS)).toISOString(),
    );
  if (error) {
    return jsonResponse({ error: error.message }, 500);
  }
  if (count === null) {
    return jsonResponse({ error: "Couldn't retrieve request count" }, 500);
  }
  if (count >= ALLOWED_REQUESTS_PER_HOUR) {
    return jsonResponse({ error: "Rate limit exceeded" }, 429);
  }
  // ** RATE LIMITING ** //

  const { data, error: get_matchup_error } = await supabase.from("get_matchup")
    .select();
  if (get_matchup_error) {
    return jsonResponse({ error: get_matchup_error.message }, 500);
  }
  if (!data || data.length < 2) {
    return jsonResponse({ error: "No matchup found" }, 404);
  }

  const token = crypto.randomUUID();
  // TODO: should we do something with this error?
  const { error: _create_token_error } = await supabase.from("battle_tokens")
    .insert({
      token,
      company_1: data[0].id,
      company_2: data[1].id,
      ip,
    });

  return jsonResponse({ data, token }, 200);
};
