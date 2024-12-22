import { FreshContext } from "$fresh/server.ts";
import { getSupabaseClient } from "../../util/supabase.ts";

// To see actual ELO updating logic, see data/handle_battle.sql
export const handler = async (
  req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const { winner_id, loser_id, token } = await req.json();
  const supabase = getSupabaseClient();

  // *** TOKEN VALIDATION *** //
  let { data, error } = await supabase.from("battle_tokens").select(
    "company_1, company_2",
  ).filter("token", "eq", token).single();
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  if (!data) {
    return new Response("Invalid token", { status: 401 });
  }

  ({ error } = await supabase.from("battle_tokens").delete().filter(
    "token",
    "eq",
    token,
  ));
  if (error) {
    // We don't want to cancel the battle if the token deletion fails - just log it
    console.log(error.message);
  }

  // If the given companies don't match what we expect given the token, fail the operation
  if (
    ![data.company_1, data.company_2].includes(winner_id) ||
    ![data.company_1, data.company_2].includes(loser_id)
  ) {
    return new Response("Invalid winner or loser", { status: 400 });
  }
  // *** END TOKEN VALIDATION *** //

  // *** Just for debugging - this typescript code isn't used in production *** //

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

  ({ error } = await supabase.rpc("handle_battle", {
    winner_id,
    loser_id,
  }));
  if (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ error: null }), { status: 200 });
};
