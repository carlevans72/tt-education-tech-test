import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getMovieList } from '../../api';
import { Genre } from '../../types';
import { MovieListing } from '../movie-listing';
import { Pagination } from '../pagination';
import { Search } from '../search';
import { Error } from '../error';

const MovieContainer = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<Genre>();
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear(),
  );

  const { data, isError } = useQuery(
    ['movie-list', selectedPage, selectedGenre, selectedYear],
    () => getMovieList(selectedPage, selectedGenre, selectedYear),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      cacheTime: 0,
      staleTime: 0,
    },
  );

  return (
    <div className='m-5'>
      {isError && (
        <Error>
          <p>Something went wrong</p>
        </Error>
      )}

      <Search
        mediaType='movie'
        setSelectedPage={setSelectedPage}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      {data?.results && (
        <>
          <Pagination
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            totalPages={data.total_pages}
            limitPages={500}
          />
          <MovieListing list={data.results} />
        </>
      )}
    </div>
  );
};

export { MovieContainer };
