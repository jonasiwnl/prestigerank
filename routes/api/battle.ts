import { FreshContext } from "$fresh/server.ts";
import { supabase } from "../../util/supabase.ts";

/**
 * TODO: this will cause a race condition. New elo values are calculated based on
 * potentially old, stale elo values. Supabase doesn't support transactions, so
 * to fix this, this would need to be written in SQL.
 */

/**
 * Standard ELO rating system with a dynamic K-value based on matches played
 * K = [ (10_000 - played) / 10_000 min=0, max=1 ] * 15 + 5
 * (basically between 5 and 20)
 *
 * E_win is the probability that the winner will win
 * new elo = old elo + K * (actual - expected)
 */
export const handler = async (
  req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const { winner, loser } = await req.json();

  const E_win = 1 / (1 + 10 ** ((loser.elo - winner.elo) / 400));
  const K_win = Math.max(10_000 - winner.battles, 0) / 10_000 * 15 + 5;
  const E_lose = 1 - E_win;
  const K_lose = Math.max(10_000 - loser.battles, 0) / 10_000 * 15 + 5;

  const newWinnerElo = winner.elo + K_win * (1 - E_win);
  const newLoserElo = loser.elo + K_lose * -E_lose;

  // console.info(`Winner: ${winner.name} K-value: ${K_win} ${winner.elo} -> ${newWinnerElo}`);
  // console.info(`Loser: ${loser.name} K-value: ${K_lose} ${loser.elo} -> ${newLoserElo}`);
  // console.log();

  const { error: updateWinnerError } = await supabase.rpc("handle_battle", {
    company_id: winner.id,
    new_elo: newWinnerElo,
  });
  if (updateWinnerError) {
    return new Response(JSON.stringify({ error: updateWinnerError }), {
      status: 500,
    });
  }
  const { error: updateLoserError } = await supabase.rpc("handle_battle", {
    company_id: loser.id,
    new_elo: newLoserElo,
  });
  if (updateLoserError) {
    return new Response(JSON.stringify({ error: updateLoserError }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ error: null }), { status: 200 });
};
