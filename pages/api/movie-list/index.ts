import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return await getMovieList(req, res);
  } else {
    res.status(404).end();
  }
};

const getMovieList = async (req: NextApiRequest, res: NextApiResponse) => {
  const { page, genre, year } = req.query;

  // QS
  const params = new URLSearchParams();
  params.append('page', String(page));
  genre && params.append('with_genres', String(genre));
  params.append('year', String(year));

  const apiKey = process.env.TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&${params}`;

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
