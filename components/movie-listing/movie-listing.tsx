import { Movie } from '../../types';
import { Card } from '../card';

type MovieListingProps = {
  list: Movie[];
};

const MovieListing = ({ list }: MovieListingProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {list.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.poster_path}
          rating={item.vote_average}
          enableReviews={true}
        />
      ))}
    </div>
  );
};

export { MovieListing };
