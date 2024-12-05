import { Company } from "../util/types.ts";
import { ComponentProps } from "preact";

export const CompanyRow = (
  { company, showElo, ...props }:
    & { company: Company; showElo: boolean }
    & ComponentProps<"li">,
) => {
  return (
    <li
      class="bg-slate-300 rounded px-20 py-5 m-2 hover:cursor-pointer hover:bg-slate-400"
      {...props}
    >
      <p>{company.name}</p>
      {showElo && <p>Elo: {company.elo}</p>}
    </li>
  );
};
