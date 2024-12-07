import { Company } from "../util/types.ts";
import { ComponentProps } from "preact";

export const CompanyBattleCard = (
  { company, ...props }:
    & { company: Company }
    & ComponentProps<"li">,
) => {
  return (
    <li
      class="bg-slate-300 rounded px-20 py-5 m-2 hover:cursor-pointer hover:bg-slate-400 w-full"
      {...props}
    >
      <p class="font-semibold">{company.name}</p>
    </li>
  );
};
