import { Company } from "../util/types.ts";
import { ComponentProps } from "preact";

export const CompanyBattleCard = (
  { company, ...props }:
    & { company: Company }
    & ComponentProps<"div">,
) => {
  return (
    <div
      class="rounded-xl py-5 m-2 hover:cursor-pointer text-center shadow-md border border-foreground hover:border-secondary hover:text-secondary"
      {...props}
    >
      <p class="font-semibold">{company.name}</p>
    </div>
  );
};
