import { TvShow } from '../../types';
import { Card } from '../card';

type TvTrendingListingProps = {
  list: TvShow[];
};

const TvTrendingListing = ({ list }: TvTrendingListingProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {list.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.name}
          image={item.poster_path}
          rating={item.vote_average}
          enableReviews={false}
        />
      ))}
    </div>
  );
};

export { TvTrendingListing };
