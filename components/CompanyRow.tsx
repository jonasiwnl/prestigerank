import { Company } from "../util/types.ts";
import { ComponentProps } from "preact";

export const CompanyRow = (
  { company, ...props }: { company: Company } & ComponentProps<"li">,
) => {
  return (
    <li {...props}>
      <div>{company.name} elo: {Math.round(company.elo)}</div>
    </li>
  );
};
