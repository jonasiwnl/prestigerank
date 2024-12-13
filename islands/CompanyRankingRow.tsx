import { Company } from "../util/types.ts";
import { ComponentProps } from "preact";

export const CompanyRankingRow = (
  { company, ranking, showDropdown, setSelectedRanking, ...props }:
    & {
      company: Company;
      ranking: number;
      showDropdown: boolean;
      setSelectedRanking: (index: number | null) => void;
    }
    & ComponentProps<"li">,
) => {
  return (
    <li
      class="bg-slate-300 rounded px-20 py-5 my-2 hover:cursor-pointer hover:bg-slate-400 relative"
      onClick={() => setSelectedRanking(showDropdown ? null : ranking)}
      {...props}
    >
      <div class="flex flex-row justify-between font-semibold">
        <div class="flex flex-row">
          {/* Ranking is 0-indexed - i.e. 0, 1, 2 but we want 1, 2, 3 */}
          <p class="mr-3">{ranking + 1}</p>
          <p>{company.name}</p>
        </div>
        <p>{Math.round(company.elo)}</p>
      </div>
      {showDropdown && (
        <>
          <p>elo: {company.elo}</p>
          <p>battles played: {company.battles}</p>
          <p>
            <a
              class="text-gray-700 underline"
              href={company.website}
              target="_blank"
            >
              website
            </a>
          </p>
          {company.levels_url && (
            <a
              class="text-gray-700 underline"
              href={company.levels_url}
              target="_blank"
            >
              levels.fyi
            </a>
          )}
        </>
      )}
    </li>
  );
};
