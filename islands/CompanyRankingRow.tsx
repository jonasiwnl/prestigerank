import { Company } from "../util/types.ts";
import { ComponentProps } from "preact";
import { useState } from "preact/hooks";

export const CompanyRankingRow = (
  { company, ...props }:
    & { company: Company }
    & ComponentProps<"li">,
) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <li
      class="bg-slate-300 rounded px-20 py-5 m-2 hover:cursor-pointer hover:bg-slate-400 relative"
      {...props}
    >
      <div class="flex flex-row justify-between">
        <p class="font-semibold">{company.name}</p>
        <div class="flex flex-row">
          <p class="mr-2">{Math.round(company.elo)}</p>
          <button onClick={() => setShowDropdown(!showDropdown)}>
            Info
          </button>
        </div>
      </div>
      {showDropdown && (
        <>
          <p>elo: {company.elo}</p>
          <p>battles played: {company.battles}</p>
          <p>
            <a href={company.website} target="_blank">website</a>
          </p>
          {company.levels_url && (
            <a href={company.levels_url} target="_blank">levels.fyi</a>
          )}
        </>
      )}
    </li>
  );
};
