import { render, screen } from '@testing-library/react';

import { RepositoriesTable } from '../Table';
import { MOCK_GET_REPOSITORIES_SUCCESS_ITEMS } from '../../graphql/MockGetRepositoriesSuccess';

describe('RepositoriesTable', () => {
  test.each(['Name', 'Stars', 'Forks'])(
    'renders correctly %s column title',
    title => {
      render(<RepositoriesTable />);

      const label = screen.getByText(title);

      expect(label).toBeInTheDocument();
    }
  );

  it('renders correct empty state', () => {
    render(<RepositoriesTable />);

    const label = screen.getByText(/no data/i);

    expect(label).toBeInTheDocument();
  });

  it('renders correct data rows', () => {
    render(
      <RepositoriesTable dataSource={MOCK_GET_REPOSITORIES_SUCCESS_ITEMS} />
    );

    const [, secondTableItemData] = MOCK_GET_REPOSITORIES_SUCCESS_ITEMS;
    const secondRowName = screen.getByText(secondTableItemData.name);
    const secondRowTable = secondRowName.closest('tr');
    const secondRowTableLink = secondRowName.closest('a');

    expect(secondRowTable).toHaveTextContent(
      `🌟 ${secondTableItemData.stargazerCount}`
    );
    expect(secondRowTable).toHaveTextContent(
      `🍴 ${secondTableItemData.forkCount}`
    );
    expect(secondRowTableLink).toHaveAttribute('href', secondTableItemData.url);
  });
});
