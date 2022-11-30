import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return await getTvTrendingList(req, res);
  } else {
    res.status(404).end();
  }
};

const getTvTrendingList = async (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.query;

  const apiKey = process.env.TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}&page=${page}`;

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
