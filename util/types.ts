export type Company = {
  id: number;
  name: string;
  elo: number;
  battles: bigint;
  website: string;
  levels_url: string;
};

export type Matchup = {
  data: Company[];
  token: string;
};
