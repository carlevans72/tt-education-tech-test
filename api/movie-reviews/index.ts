import { Genre, MovieListResponse, MovieReviewsResponse } from '../../types';

const getMovieReviews = async (
  movieId: number,
): Promise<MovieReviewsResponse> => {
  const url = `/api/movie-reviews/${movieId}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Something went wrong.');
  }

  return await response.json();
};

export { getMovieReviews };
