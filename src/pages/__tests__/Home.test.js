import { MockedProvider } from '@apollo/client/testing';
import { render, screen, fireEvent } from '@testing-library/react';

import Home from '../index';
import {
  MOCK_GET_REPOSITORIES_SUCCESS,
  MOCK_GET_REPOSITORIES_SUCCESS_ITEMS
} from '../../modules/repositories/graphql/MockGetRepositoriesSuccess';

const [firstRowData] = MOCK_GET_REPOSITORIES_SUCCESS_ITEMS;
const mocks = [MOCK_GET_REPOSITORIES_SUCCESS];

const renderHomePageWithProviders = () =>
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>
  );

const routerPushMock = jest.fn();

jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: {},
      push: routerPushMock
    };
  }
}));

describe('HomePage', () => {
  it('renders correct', async () => {
    renderHomePageWithProviders();

    const firstRowName = await screen.findByText(firstRowData.name);
    const firstRow = firstRowName.closest('tr');
    const tableBody = firstRowName.closest('tbody');

    expect(firstRowName).toHaveAttribute('href', firstRowData.url);
    expect(firstRow).toHaveTextContent(firstRowData.forkCount);
    expect(firstRow).toHaveTextContent(firstRowData.stargazerCount);
    expect(tableBody.childElementCount).toEqual(10);
  });

  it('calls router.push after entering different query', async () => {
    renderHomePageWithProviders();

    const queryInput = screen.getByPlaceholderText(
      'Search GitHub Repositories'
    );

    fireEvent.change(queryInput, { target: { value: 'test' } });

    const searchButton = screen.getByText('Search').closest('button');

    fireEvent.click(searchButton);

    expect(routerPushMock).toBeCalled();
  });
});
