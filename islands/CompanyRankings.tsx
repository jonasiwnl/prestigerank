import { Company } from "../util/types.ts";
import { CompanyRankingRow } from "../components/CompanyRankingRow.tsx";
import { useEffect, useRef, useState } from "preact/hooks";

function useCommandKFocus(ref: { current: HTMLInputElement | null }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        ref.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [ref]);
}

export function CompanyRankings({ data }: { data: Company[] }) {
  const [selectedRanking, setSelectedRanking] = useState<number | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  // Determine key combo based on the platform
  const keyCombo =
    (typeof navigator !== "undefined" && /Mac/i.test(navigator.userAgent))
      ? "⌘+k"
      : "Ctrl+k";

  const searchInputRef = useRef<HTMLInputElement>(null);
  useCommandKFocus(searchInputRef);

  const companyRankings = data
    // Generate company ranking
    ?.map((company: Company, ranking: number) => ({ company, ranking }))
    // Filter by potential search query
    .filter(({ company }) =>
      search === "" ||
      company.name.toLowerCase().startsWith(search.toLowerCase())
    );

  return (
    <>
      <input
        ref={searchInputRef}
        class="w-full py-2 px-3 mb-2 bg-slate-300 rounded-xl font-semibold"
        value={search}
        placeholder={`Search (${keyCombo})`}
        onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
      />
      <ul>
        {
          // Display either top 25 or all depending on showAll
          companyRankings.map(({ company, ranking }, index) => (
            (showAll || index < 25)
              ? (
                <CompanyRankingRow
                  company={company}
                  ranking={ranking}
                  showDropdown={selectedRanking !== null &&
                    ranking === selectedRanking}
                  setSelectedRanking={setSelectedRanking}
                />
              )
              : null
          ))
        }
      </ul>
      {companyRankings.length === 0 && (
        <p class="text-center font-semibold mt-2">no companies found</p>
      )}
      {companyRankings.length > 25 &&
        (
          <div class="w-full flex justify-center">
            <button
              type="button"
              class="w-1/3 bg-slate-300 rounded-xl py-2 mt-4 font-semibold"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "show less" : "show more"}
            </button>
          </div>
        )}
    </>
  );
}
