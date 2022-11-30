import { rest } from 'msw';
import { MOCK_GENRE_LIST } from '../rtl/fixtures/genre-list';
import { MOCK_MOVIE_LIST } from '../rtl/fixtures/movie-list';
import { MOCK_TV_TRENDING_LIST } from '../rtl/fixtures/tv-trending-list';
import {
  GenreListResponse,
  MovieListResponse,
  TvShowListResponse,
} from '../types';

export const handlers = [
  rest.get<MovieListResponse>('/api/movie-list', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json<MovieListResponse>(MOCK_MOVIE_LIST));
  }),

  rest.get<TvShowListResponse>('/api/tv-trending-list', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<TvShowListResponse>(MOCK_TV_TRENDING_LIST),
    );
  }),

  rest.get<GenreListResponse>('/api/genre-list/movie', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json<GenreListResponse>(MOCK_GENRE_LIST));
  }),
];
