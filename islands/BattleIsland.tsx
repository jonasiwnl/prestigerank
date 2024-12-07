import { Company } from "../util/types.ts";
import { CompanyRow } from "./CompanyRow.tsx";
import { useEffect, useState } from "preact/hooks";

export function BattleIsland() {
  const [data, setData] = useState<Company[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchMatchup = async () => {
    setLoading(true);

    const data = await fetch("/api/getmatchup").then((res) => res.json()).catch(
      (error) => {
        console.error(error);
        setError(error.message);
      },
    );

    setData(data);
    setLoading(false);
  };

  const handleBattle = (
    { winner, loser }: { winner: Company; loser: Company },
  ) => {
    fetch("/api/battle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ winner, loser }),
    });
    fetchMatchup();
  };

  const getBattleHtml = (loading: boolean, data: Company[]) => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (data.length === 2) {
      return (
        <ul>
          <CompanyRow
            onClick={() => handleBattle({ winner: data[0], loser: data[1] })}
            company={data[0]}
            showInfo={false}
          />
          <CompanyRow
            onClick={() => handleBattle({ winner: data[1], loser: data[0] })}
            company={data[1]}
            showInfo={false}
          />
        </ul>
      );
    }
    return <p>Sorry, we couldn't find a matchup</p>;
  };

  useEffect(() => {
    fetchMatchup();
  }, []);

  if (error) {
    return <p>Sorry, we encountered an error: {error}</p>;
  }

  return (
    <>
      <button onClick={fetchMatchup}>Skip</button>
      {getBattleHtml(loading, data)}
    </>
  );
}
