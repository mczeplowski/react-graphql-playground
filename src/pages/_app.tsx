import '../styles/globals.css';

import { ApolloProvider } from '@apollo/client';

import { apolloClient } from '../config/apolloClient';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
