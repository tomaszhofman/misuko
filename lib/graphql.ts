import { ApolloClient, InMemoryCache } from '@apollo/client';

import { NEXT_PUBLIC_API_URI } from '@/lib/const';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: NEXT_PUBLIC_API_URI,
});

export default apolloClient;
