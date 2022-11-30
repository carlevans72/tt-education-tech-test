import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, within } from '@testing-library/react';
import { MOCK_TV_TRENDING_LIST } from '../../rtl/fixtures/tv-trending-list';
import { TvTrendingListing } from './tv-trending-listing';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
      staleTime: 0,
    },
  },
});

describe('<TVTrendingListing>', () => {
  it('should render correct number of tv show cards', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TvTrendingListing list={MOCK_TV_TRENDING_LIST.results} />
      </QueryClientProvider>,
    );

    const cards = screen.getAllByRole('gridcell');

    expect(cards.length).toEqual(20);
  });

  it('should render tv show cards', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TvTrendingListing list={MOCK_TV_TRENDING_LIST.results} />
      </QueryClientProvider>,
    );

    const cards = screen.getAllByRole('gridcell');

    // Assert tv show cards exist
    expect(
      within(cards[0]).getByRole('heading', { level: 2, name: /Wednesday/i }),
    ).toBeInTheDocument();

    expect(
      within(cards[19]).getByRole('heading', {
        level: 2,
        name: /The English/i,
      }),
    ).toBeInTheDocument();
  });
});
