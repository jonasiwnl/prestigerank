import { FreshContext } from "$fresh/server.ts";
import { supabase } from "../../util/supabase.ts";

export const handler = async (
  req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const { winner, loser } = await req.json();

  const E_win = 1 / (1 + 10 ** ((loser.elo - winner.elo) / 400));
  const E_lose = 1 - E_win;

  const newWinnerElo = winner.elo + 10 * (1 - E_win);
  const newLoserElo = loser.elo + 10 * -E_lose;

  const { error: updateWinnerError } = await supabase.from("companies").update({
    elo: newWinnerElo,
  }).eq("id", winner.id);
  if (updateWinnerError) {
    return new Response(JSON.stringify({ error: updateWinnerError }), {
      status: 500,
    });
  }
  const { error: updateLoserError } = await supabase.from("companies").update({
    elo: newLoserElo,
  }).eq("id", loser.id);
  if (updateLoserError) {
    return new Response(JSON.stringify({ error: updateLoserError }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ error: null }), { status: 200 });
};
