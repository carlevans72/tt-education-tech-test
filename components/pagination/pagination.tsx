import { Dispatch, SetStateAction } from 'react';
import { Button } from '../button';

type PaginationProps = {
  selectedPage: number;
  setSelectedPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  limitPages: number; // API only supports 500 pages?!?
};

const Pagination = ({
  selectedPage,
  setSelectedPage,
  totalPages,
  limitPages,
}: PaginationProps) => {
  const prevPageHandler = () => {
    setSelectedPage((prevSelectedPage) => prevSelectedPage - 1);
  };

  const nextPageHandler = () => {
    setSelectedPage((prevSelectedPage) => prevSelectedPage + 1);
  };

  return (
    <div className='flex justify-between items-center my-5'>
      <Button
        text='Prev'
        disabled={selectedPage === 1}
        clickHandler={prevPageHandler}
      />
      <span>
        Viewing page {selectedPage} of {Math.min(totalPages, limitPages)}
      </span>
      <Button
        text='Next'
        disabled={selectedPage === totalPages || selectedPage === limitPages}
        clickHandler={nextPageHandler}
      />
    </div>
  );
};

export { Pagination };
