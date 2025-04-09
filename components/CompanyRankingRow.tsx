import { Company } from "../util/types.ts";
import { ComponentProps } from "preact";
import { getColorValue } from "../util/company-ranking-colors.ts";

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
  const colorTheme = getColorValue(ranking);

  return (
    <li
      class={`${colorTheme.bg} border ${colorTheme.border} rounded-xl shadow-md px-20 py-5 my-2 hover:cursor-pointer relative`}
      onClick={() => setSelectedRanking(showDropdown ? null : ranking)}
      {...props}
    >
      <div class="flex flex-row justify-between font-semibold">
        <div class="flex flex-row">
          {/* Ranking is 0-indexed - i.e. 0, 1, 2 but we want 1, 2, 3 */}
          <p class={`mr-4 ${colorTheme.text}`}>{ranking + 1}</p>
          <p class={`${colorTheme.text} mr-3`}>
            {company.previous_ranking > ranking + 1
              ? (
                <div class="flex items-center">
                  <img width="20" height="20" src="/up-arrow-green.svg" />
                  <p class="text-xs text-green ml-1">
                    {company.previous_ranking - (ranking + 1)}
                  </p>
                </div>
              )
              : company.previous_ranking < ranking + 1
              ? (
                <div class="flex items-center">
                  <img
                    width="20"
                    height="20"
                    class="rotate-180"
                    src="/up-arrow-red.svg"
                  />
                  <p class="text-xs text-red ml-1">
                    {ranking + 1 - company.previous_ranking}
                  </p>
                </div>
              )
              : <img width="20" height="20" src="/horizontal-line.svg" />}
          </p>

          <p class={`${colorTheme.text}`}>{company.name}</p>
        </div>
        <p class={`${colorTheme.text}`}>
          {Math.round(company.elo)}
        </p>
      </div>
      {showDropdown && (
        <>
          <p class={`${colorTheme.text}`}>
            elo: {company.elo}
          </p>
          <p class={`${colorTheme.text}`}>
            battles played: {company.battles}
          </p>
          <p>
            <a
              class={`hover:${colorTheme.link} underline`}
              href={company.website}
              target="_blank"
            >
              website
            </a>
          </p>
          {company.levels_url && (
            <a
              class={`hover:${colorTheme.link} underline`}
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
