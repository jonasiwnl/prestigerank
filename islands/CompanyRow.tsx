import { Company } from "../util/types.ts";
import { ComponentProps } from "preact";
import { useState } from "preact/hooks";

export const CompanyRow = (
  { company, showInfo, ...props }:
    & { company: Company; showInfo: boolean }
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
        {showInfo && (
          <div class="flex flex-row">
            <p class="mr-2">{Math.round(company.elo)}</p>
            <button onClick={() => setShowDropdown(!showDropdown)}>
              Info
            </button>
          </div>
        )}
      </div>
      {showInfo &&
        showDropdown && <p>Dropdown</p>}
    </li>
  );
};
