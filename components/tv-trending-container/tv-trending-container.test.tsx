import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor, within } from '@testing-library/react';
import { TvTrendingContainer } from './tv-trending-container';
import { server } from '../../mocks/server';
import { rest } from 'msw';
import { TvShowListResponse } from '../../types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
      staleTime: 0,
    },
  },
});

describe('<TVTrendingContainer>', () => {
  it('should render correct number of tv show cards', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TvTrendingContainer />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      const cards = screen.getAllByRole('gridcell');

      expect(cards.length).toEqual(20);
    });
  });

  it('should render error message when an error occurs', async () => {
    server.use(
      rest.get<TvShowListResponse>('/api/tv-trending-list', (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    render(
      <QueryClientProvider client={queryClient}>
        <TvTrendingContainer />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(
        'Something went wrong',
      );
    });
  });
});
