import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getTvTrendingList } from '../../api';
import { Pagination } from '../pagination';
import { TvTrendingListing } from '../tv-trending-listing';
import { Error } from '../error';

const TvTrendingContainer = () => {
  const [selectedPage, setSelectedPage] = useState(1);

  const { data, isError } = useQuery(
    ['tv-trending-list', selectedPage],
    () => getTvTrendingList(selectedPage),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  );

  return (
    <div className='m-5'>
      {isError && (
        <Error>
          <p>Something went wrong</p>
        </Error>
      )}

      {data?.results && (
        <>
          <Pagination
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            totalPages={data.total_pages}
            limitPages={1000}
          />
          <TvTrendingListing list={data.results} />
        </>
      )}
    </div>
  );
};

export { TvTrendingContainer };
