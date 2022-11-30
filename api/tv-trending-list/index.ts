import { TvShowListResponse } from '../../types';

const getTvTrendingList = async (
  selectedPage: number,
): Promise<TvShowListResponse> => {
  const url = `/api/tv-trending-list?page=${selectedPage}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Something went wrong.');
  }

  return await response.json();
};

export { getTvTrendingList };
