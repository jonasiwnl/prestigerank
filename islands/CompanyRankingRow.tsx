import { Company } from "../util/types.ts";
import { ComponentProps } from "preact";

export const CompanyRankingRow = (
  { company, index, showDropdown, setSelectedIndex, ...props }:
    & {
      company: Company;
      index: number;
      showDropdown: boolean;
      setSelectedIndex: (index: number | null) => void;
    }
    & ComponentProps<"li">,
) => {
  return (
    <li
      class="bg-slate-300 rounded px-20 py-5 my-2 hover:cursor-pointer hover:bg-slate-400 relative"
      onClick={() => setSelectedIndex(showDropdown ? null : index)}
      {...props}
    >
      <div class="flex flex-row justify-between font-semibold">
        <p>{company.name}</p>
        <p class="mr-2">{Math.round(company.elo)}</p>
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
