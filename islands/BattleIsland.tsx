import { Company, Matchup } from "../util/types.ts";
import { CompanyBattleCard } from "../components/CompanyBattleCard.tsx";
import { useEffect, useState } from "preact/hooks";

export function BattleIsland() {
  const [data, setData] = useState<Company[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchMatchup = async () => {
    setLoading(true);

    const data: Matchup = await fetch("/api/getmatchup").then((res) =>
      res.json()
    ).catch(
      (error) => setError(error.message),
    );

    setData(data.data);
    setToken(data.token);
    setLoading(false);
  };

  const handleBattle = (
    { winner_id, loser_id }: { winner_id: number; loser_id: number },
  ) => {
    fetch("/api/battle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ winner_id, loser_id, token }),
    });
    fetchMatchup();
  };

  const getBattleHtml = (loading: boolean, data: Company[]) => {
    if (loading) {
      return <p class="font-semibold">loading...</p>;
    }
    if (data.length === 2) {
      return (
        <ul>
          <CompanyBattleCard
            onClick={() =>
              handleBattle({ winner_id: data[0].id, loser_id: data[1].id })}
            company={data[0]}
          />
          <CompanyBattleCard
            onClick={() =>
              handleBattle({ winner_id: data[1].id, loser_id: data[0].id })}
            company={data[1]}
          />
        </ul>
      );
    }
    return <p>sorry, we couldn't find a matchup</p>;
  };

  useEffect(() => {
    fetchMatchup();
  }, []);

  if (error) {
    return <p>sorry, we encountered an error: {error}</p>;
  }

  return (
    <div class="w-1/2 flex flex-col text-center">
      <button
        type="button"
        class="font-semibold mt-1 mb-4"
        onClick={fetchMatchup}
      >
        skip
      </button>
      {getBattleHtml(loading, data)}
    </div>
  );
}
