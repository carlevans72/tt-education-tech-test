import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { getGenreList } from '../../api/genre-list';
import { Genre, GenreListResponse, MediaType } from '../../types';

type SearchProps = {
  mediaType: keyof typeof MediaType;
  setSelectedPage: Dispatch<SetStateAction<number>>;
  selectedGenre: Genre | undefined;
  setSelectedGenre: Dispatch<SetStateAction<Genre | undefined>>;
  selectedYear: number | undefined;
  setSelectedYear: Dispatch<SetStateAction<number>>;
};

const Search = ({
  mediaType,
  setSelectedPage,
  selectedGenre,
  setSelectedGenre,
  selectedYear,
  setSelectedYear,
}: SearchProps) => {
  const year = new Date().getFullYear();
  const years = Array.from(new Array(20), (_value, index) => year - index);

  const { data, isError, isLoading } = useQuery(
    ['genre-list', mediaType],
    () => getGenreList(mediaType),
    {
      refetchOnWindowFocus: false,
    },
  );

  const genreChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = (data as GenreListResponse).genres.find(
      (genre) => genre.id === +e.target.value,
    );

    setSelectedGenre(selected);
    setSelectedPage(1);
  };

  const yearChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(+e.target.value);
    setSelectedPage(1);
  };

  return (
    <div className='flex w-full md:flex-row items-center justify-center border border-slate-700 bg-slate-200 rounded-lg p-2'>
      <label className='flex items-center mr-5'>
        <div className='mr-3'>Genre:</div>
        <select
          className='px-2 py-3 border border-slate-500 rounded-lg'
          onChange={genreChangeHandler}
          value={selectedGenre?.id}
        >
          <option key={0} value=''>
            Choose Genre
          </option>
          {data?.genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </label>
      <label className='flex items-center'>
        <div className='mr-3'>Year:</div>
        <select
          className='px-2 py-3 border border-slate-500 rounded-lg'
          onChange={yearChangeHandler}
          value={selectedYear}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export { Search };
