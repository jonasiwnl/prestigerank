import { FreshContext } from "$fresh/server.ts";
import { supabase } from "../../util/supabase.ts";

// To see actual ELO updating logic, see data/handle_battle.sql
export const handler = async (
  req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const { winner_id, loser_id } = await req.json();

  // *** Just for debugging - this typescript code isn't used in production ***

  // const { data: winner } = await supabase
  //   .from("companies")
  //   .select("elo, battles, name")
  //   .eq("id", winner_id)
  //   .single();

  // const { data: loser } = await supabase
  //   .from("companies")
  //   .select("elo, battles, name")
  //   .eq("id", loser_id)
  //   .single();

  // const E_win = 1 / (1 + 10 ** ((loser.elo - winner.elo) / 400));
  // const K_win = Math.max(2000 - winner.battles, 0) / 2000 * 15 + 5;
  // const E_lose = 1 - E_win;
  // const K_lose = Math.max(2000 - loser.battles, 0) / 2000 * 15 + 5;

  // const newWinnerElo = winner.elo + K_win * (1 - E_win);
  // const newLoserElo = loser.elo + K_lose * -E_lose;

  // console.info(
  //   `Winner: ${winner.name} K-value: ${K_win} ${winner.elo} -> ${newWinnerElo}`,
  // );
  // console.info(
  //   `Loser: ${loser.name} K-value: ${K_lose} ${loser.elo} -> ${newLoserElo}`,
  // );
  // console.log();

  const { error } = await supabase.rpc("handle_battle", {
    winner_id,
    loser_id,
  });
  if (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ error: null }), { status: 200 });
};
