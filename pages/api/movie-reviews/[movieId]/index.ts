import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return await getMovieReviews(req, res);
  } else {
    res.status(404).end();
  }
};

const getMovieReviews = async (req: NextApiRequest, res: NextApiResponse) => {
  const { movieId } = req.query;

  const apiKey = process.env.TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`;

  const response = await fetch(url, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  const json = await response.json();

  res.status(response.status).json(json);
};

export default handler;
