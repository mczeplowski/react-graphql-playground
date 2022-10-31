import Head from 'next/head';

import {
  Repository,
  useGetRepositoriesQuery
} from '../generated/graphql-types';

export default function Home() {
  const { loading, error, data } = useGetRepositoriesQuery();
  console.log({ error, data });

  const nodes = data?.search?.edges
    ?.map(edge => edge?.node)
    .filter(node => node?.__typename === 'Repository') as Partial<Repository>[];

  return (
    <>
      <Head>
        <title>React Graphql Playground</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        {nodes?.map(node => (
          <li key={node.id}>{node.name}</li>
        ))}
      </ul>
    </>
  );
}
