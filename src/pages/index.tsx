import { Alert } from 'antd';
import Head from 'next/head';

import {
  Repository,
  useGetRepositoriesQuery
} from '../generated/graphql-types';
import { RepositoriesSearchInput } from '../modules/repositories/components/SearchInput';
import { RepositoriesTable } from '../modules/repositories/components/Table';
import { normalizeRepositoryResponseData } from '../modules/repositories/helpers/normalizeRepositoryResponseData';
import { useSearchRepositoryQueryParams } from '../modules/repositories/hooks/useSearchRepositoryQueryParams';

const DEFAULT_QUERY_VALUE = 'stars:>100000';
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_AFTER = '0';

const Home = () => {
  const { queryParams, pushParams } = useSearchRepositoryQueryParams();
  const queryText = queryParams.query || DEFAULT_QUERY_VALUE;
  const pageSize = Number(queryParams.first) || DEFAULT_PAGE_SIZE;
  const currentPage = queryParams.after
    ? Number(queryParams.after) / pageSize + 1
    : undefined;

  const { loading, error, data } = useGetRepositoriesQuery({
    variables: {
      query: queryText,
      first: pageSize,
      after: Buffer.from(
        `cursor:${queryParams.after || DEFAULT_AFTER}`
      ).toString('base64')
    }
  });

  const handleOnSearch = (query: string) => {
    pushParams({ query, after: DEFAULT_AFTER });
  };

  const nodes = normalizeRepositoryResponseData(data);

  return (
    <>
      <Head>
        <title>React Graphql Playground</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RepositoriesSearchInput
        onSearch={handleOnSearch}
        defaultValue={queryParams.query ? `${queryParams.query}` : ''}
      />
      {error ? (
        <Alert message={error.name} description={error.message} type="error" />
      ) : (
        <RepositoriesTable
          dataSource={nodes}
          loading={loading}
          pagination={{
            pageSize,
            total: data?.search.repositoryCount,
            current: currentPage
          }}
          onChange={({ current, pageSize }) => {
            const after =
              current && pageSize
                ? `${(current - 1) * pageSize}`
                : DEFAULT_AFTER;

            pushParams({
              query: queryText,
              after,
              first: pageSize
            });
          }}
        />
      )}
    </>
  );
};

export default Home;
