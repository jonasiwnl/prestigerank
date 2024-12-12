import { Company } from "../util/types.ts";
import { ComponentProps } from "preact";

export const CompanyBattleCard = (
  { company, ...props }:
    & { company: Company }
    & ComponentProps<"div">,
) => {
  return (
    <div
      class="bg-slate-300 rounded py-5 m-2 hover:cursor-pointer hover:bg-slate-400 text-center"
      {...props}
    >
      <p class="font-semibold">{company.name}</p>
    </div>
  );
};
