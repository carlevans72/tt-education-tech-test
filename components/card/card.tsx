import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../api/movie-reviews';
import { Button } from '../button';
import { toast } from 'react-toastify';
import { Modal, useModal } from '../modal';
import { Review } from '../review';

/* eslint-disable @next/next/no-img-element */
type CardProps = {
  id: number;
  title: string;
  image: string;
  rating: number;
  enableReviews: boolean;
};

const Card = ({ id, title, image, rating, enableReviews }: CardProps) => {
  const [getReviews, setGetReviews] = useState(false);

  const { close, isOpen, open } = useModal();

  const { data, isLoading } = useQuery(
    ['movie-reviews', id],
    () => getMovieReviews(id),
    {
      enabled: getReviews,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      onSettled: () => setGetReviews(false),
      onError: () => toast.error('No reviews available'),
    },
  );

  const noReviews = <div>No Reviews</div>;

  const reviews =
    data?.results
      .slice(0, 10)
      .map((review) => (
        <Review
          key={review.id}
          author={review.authorDetails?.name || review.author}
          content={review.content}
        />
      )) || [];

  const clickHandler = () => {
    setGetReviews(true);
  };

  const closeModalHandler = () => {
    close();
  };

  useEffect(() => {
    if (getReviews && data) {
      open();
    }
  }, [getReviews, open, data]);

  return (
    <>
      <div
        role='gridcell'
        className='p-5 border border-slate-300 rounded-lg text-center'
      >
        <h2 className='text text-xl mb-5'>{title}</h2>
        <img
          className='bg-cover'
          src={`https://image.tmdb.org/t/p/original/${image}`}
          alt={title}
        />
        <div className='my-5 text-lg'>Rating: {rating.toFixed(1)} / 10</div>
        {enableReviews && (
          <Button
            text='Show Reviews'
            disabled={!enableReviews}
            clickHandler={clickHandler}
          />
        )}
      </div>
      <Modal
        isLoading={isLoading}
        heading={title}
        content={reviews.length > 0 ? reviews : noReviews}
        show={isOpen}
        closeModalHandler={closeModalHandler}
      />
    </>
  );
};

export { Card };
