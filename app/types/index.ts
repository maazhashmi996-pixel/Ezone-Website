export interface Country {
  name: string;
  slug: string;
}

export interface CountryDetail extends Country {
  title: string;
  description: string;
  heroImage?: string;
}