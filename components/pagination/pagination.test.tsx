import { render, screen } from '@testing-library/react';
import { Pagination } from './pagination';

describe('<Pagination>', () => {
  it.only('should render prev button disabled when viewing the first page', () => {
    render(
      <Pagination
        selectedPage={1}
        setSelectedPage={() => jest.fn()}
        totalPages={100}
        limitPages={500}
      />,
    );

    expect(screen.getByRole('button', { name: 'Prev' })).toBeDisabled();
  });

  it('should render prev button enabled when not viewing the first page', () => {
    render(
      <Pagination
        selectedPage={2}
        totalPages={100}
        limitPages={500}
        setSelectedPage={() => jest.fn()}
      />,
    );

    expect(screen.getByRole('button', { name: 'Prev' })).toBeEnabled();
  });

  it("should render prev and next buttons enabled when viewing a page that isn't the first page and has launches to display", () => {
    render(
      <Pagination
        selectedPage={5}
        totalPages={100}
        limitPages={500}
        setSelectedPage={() => jest.fn()}
      />,
    );

    expect(screen.getByRole('button', { name: 'Prev' })).toBeEnabled();
    expect(screen.getByRole('button', { name: 'Next' })).toBeEnabled();
  });
});
