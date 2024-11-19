export type Country = {
  cca3: string;
  name: {
    common: string;
  };
  region: string;
  subregion: string;
  capital?: string;
  population: number;
  area: number;
  languages: Record<string, string>;
  currencies: Record<string, { name: string }>;
};
