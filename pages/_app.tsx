import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { GraphQLEndpoint } from "../src/env";
import { WalletProvider } from "../src/contexts/WalletContext";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: GraphQLEndpoint,
    cache: new InMemoryCache(),
  });

  return (
    <WalletProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </WalletProvider>
  );
}

export default MyApp;
