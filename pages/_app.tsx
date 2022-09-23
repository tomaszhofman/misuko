import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

import apolloClient from '@/lib/graphql';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
