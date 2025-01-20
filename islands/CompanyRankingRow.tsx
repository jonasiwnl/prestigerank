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
      class={`bg-slate-${colorTheme.bgValue} rounded px-20 py-5 my-2 hover:cursor-pointer hover:bg-slate-${
        colorTheme.bgValue + 100
      } relative`}
      onClick={() => setSelectedRanking(showDropdown ? null : ranking)}
      {...props}
    >
      <div class="flex flex-row justify-between font-semibold">
        <div class="flex flex-row">
          <p class={`text-gray-${colorTheme.textValue} mr-3`}>
            {company.previous_ranking > ranking + 1
              ? <img width="20" height="20" src="/up-arrow-green.svg" />
              : company.previous_ranking < ranking + 1
              ? <img width="20" height="20" class="rotate-180" src="/up-arrow-red.svg" />
              : <img width="20" height="20" src="/horizontal-line.svg" />}
          </p>
          {/* Ranking is 0-indexed - i.e. 0, 1, 2 but we want 1, 2, 3 */}
          <p class={`mr-3 text-gray-${colorTheme.textValue}`}>{ranking + 1}</p>
          <p class={`text-gray-${colorTheme.textValue}`}>{company.name}</p>
        </div>
        <p class={`text-gray-${colorTheme.textValue}`}>
          {Math.round(company.elo)}
        </p>
      </div>
      {showDropdown && (
        <>
          <p class={`text-gray-${colorTheme.textValue}`}>
            elo: {company.elo}
          </p>
          <p class={`text-gray-${colorTheme.textValue}`}>
            battles played: {company.battles}
          </p>
          <p>
            <a
              class={`text-gray-${colorTheme.linkValue} underline`}
              href={company.website}
              target="_blank"
            >
              website
            </a>
          </p>
          {company.levels_url && (
            <a
              class={`text-gray-${colorTheme.linkValue} underline`}
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
