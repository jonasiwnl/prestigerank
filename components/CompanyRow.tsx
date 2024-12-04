import { Company } from "../types/types.ts";

export const CompanyRow = ({ company }: { company: Company }) => {
  return (
    <li>
      <div>{company.name} elo: {Math.round(company.elo)}</div>
    </li>
  );
};
