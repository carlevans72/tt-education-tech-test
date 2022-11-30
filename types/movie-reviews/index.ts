import { ResultsMeta } from '../shared';

export type AuthorDetails = {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
};

export type Review = {
  author: string;
  authorDetails: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

export interface MovieReviewsResponse extends ResultsMeta {
  results: Review[];
}
