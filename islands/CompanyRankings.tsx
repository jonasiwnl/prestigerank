import { Company } from "../util/types.ts";
import { CompanyRankingRow } from "./CompanyRankingRow.tsx";
import { useState } from "preact/hooks";

export function CompanyRankings({ data }: { data: Company[] }) {
  const [selectedRanking, setSelectedRanking] = useState<number | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const companyRankings = data
    // Generate company ranking
    ?.map((company: Company, ranking: number) => ({ company, ranking }))
    // Filter by potential search query
    .filter(({ company }) =>
      search === "" ||
      company.name.toLowerCase().startsWith(search.toLowerCase())
    );

  return (
    <>
      <input
        class="w-full py-2 px-3 mb-2 bg-slate-300 rounded font-semibold"
        value={search}
        placeholder="Search..."
        onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
      />
      <ul>
        {
          // Display either top 25 or all depending on showAll
          companyRankings.map(({ company, ranking }, index) => (
            (showAll || index < 25)
              ? (
                <CompanyRankingRow
                  company={company}
                  ranking={ranking}
                  showDropdown={selectedRanking !== null &&
                    ranking === selectedRanking}
                  setSelectedRanking={setSelectedRanking}
                />
              )
              : null
          ))
        }
      </ul>
      {companyRankings.length > 25 &&
        (
          <div class="w-full flex justify-center">
            <button
              class="w-1/3 bg-slate-300 rounded py-2 mt-4 font-semibold"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "show less" : "show more"}
            </button>
          </div>
        )}
    </>
  );
}
