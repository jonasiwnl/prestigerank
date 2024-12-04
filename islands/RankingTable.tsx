const data = [
  {
    name: "Jane Street",
    rating: 1200,
  },
  {
    name: "Meta",
    rating: 1116,
  },
  {
    name: "Microsoft",
    rating: 1050,
  },
  {
    name: "Amazon",
    rating: 1000,
  },
];

export default function RankingTable() {
  return (
    <div>
      {data.map((company) => <p>{company.name}</p>)}
    </div>
  );
}
