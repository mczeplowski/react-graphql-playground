import { ApolloProvider } from '@apollo/client';

import { ApplicationLayout } from '../components/ApplicationLayout/ApplicationLayout';
import { apolloClient } from '../config/apolloClient';

import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ApplicationLayout>
        <Component {...pageProps} />
      </ApplicationLayout>
    </ApolloProvider>
  );
}
