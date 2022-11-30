import { GenreListResponse, MediaType } from '../../types';

const getGenreList = async (
  mediaType: keyof typeof MediaType,
): Promise<GenreListResponse> => {
  const url = `/api/genre-list/${mediaType}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Something went wrong.');
  }

  return await response.json();
};

export { getGenreList };
