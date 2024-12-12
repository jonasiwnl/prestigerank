import { Company } from "../util/types.ts";
import { CompanyRankingRow } from "./CompanyRankingRow.tsx";
import { useState } from "preact/hooks";

export function CompanyRankings({ data }: { data: Company[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <input
        class="w-full p-2 bg-slate-300 rounded font-semibold"
        value={search}
        placeholder="Search..."
        onInput={(e) =>
          setSearch((e.target as HTMLInputElement).value)}
      />
      <ul>
        {data?.filter((company: Company) =>
          search === "" || company.name.toLowerCase().startsWith(search.toLowerCase())
        ).map((company: Company, index: number) => (
          <CompanyRankingRow
            company={company}
            index={index}
            showDropdown={selectedIndex !== null && index === selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        ))}
      </ul>
    </>
  );
}
