import { Company } from "../util/types.ts";
import { CompanyRankingRow } from "./CompanyRankingRow.tsx";
import { useState } from "preact/hooks";

export function CompanyRankings({ data }: { data: Company[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <input
        class="w-full py-2 px-3 mb-2 bg-slate-300 rounded font-semibold"
        value={search}
        placeholder="Search..."
        onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
      />
      <ul>
        {data?.map((company: Company, index: number) => (
          search === "" ||
            company.name.toLowerCase().startsWith(search.toLowerCase())
            ? (
              <CompanyRankingRow
                company={company}
                index={index}
                showDropdown={selectedIndex !== null && index === selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            )
            : null
        ))}
      </ul>
    </>
  );
}
