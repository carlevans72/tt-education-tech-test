import { Genre, MovieListResponse } from '../../types';

const getMovieList = async (
  selectedPage: number,
  selectedGenre: Genre | undefined,
  selectedYear: number,
): Promise<MovieListResponse> => {
  // QS
  const params = new URLSearchParams();
  params.append('page', String(selectedPage));
  selectedGenre && params.append('genre', String(selectedGenre?.id));
  params.append('year', String(selectedYear));

  const url = `/api/movie-list?${params}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Something went wrong.');
  }

  return await response.json();
};

export { getMovieList };
