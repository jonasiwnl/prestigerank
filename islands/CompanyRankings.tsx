import { Company } from "../util/types.ts";
import { CompanyRankingRow } from "./CompanyRankingRow.tsx";
import { useState } from "preact/hooks";

export function CompanyRankings({ data }: { data: Company[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <ul>
      {data?.map((company: Company, index: number) => (
        <CompanyRankingRow
          company={company}
          index={index}
          showDropdown={selectedIndex !== null && index === selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      ))}
    </ul>
  );
}
