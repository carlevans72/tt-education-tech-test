export const MediaType = {
  movie: 'movie',
  tv: 'tv',
} as const;

export type ResultsMeta = {
  page: number;
  total_results: number;
  total_pages: number;
};
