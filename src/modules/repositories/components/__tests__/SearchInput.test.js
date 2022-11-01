import { render, screen, fireEvent } from '@testing-library/react';

import { RepositoriesSearchInput } from '../SearchInput';

const mockOnSearch = jest.fn();

describe('RepositoriesSearchInput', () => {
  it('renders correct labels', () => {
    render(<RepositoriesSearchInput />);

    const searchButton = screen.getByText('Search').closest('button');
    const input = screen
      .getByPlaceholderText('Search GitHub Repositories')
      .closest('input');

    expect(searchButton).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('fires onSearch callback after click on Search button', () => {
    render(<RepositoriesSearchInput onSearch={mockOnSearch} />);

    const input = screen.queryByPlaceholderText('Search GitHub Repositories');
    const searchButton = screen.queryByText('Search')?.closest('button');

    fireEvent.change(input, { target: { value: 'react' } });
    fireEvent.click(searchButton);

    expect(mockOnSearch).toBeCalledTimes(1);
  });
});
