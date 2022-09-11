import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { GraphQLEndpoint } from "../src/env";
import {wagmiClient, Chains as chains} from '../walletConfig'
import { RainbowKitProvider} from '@rainbow-me/rainbowkit';
import {WagmiConfig} from 'wagmi';

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: GraphQLEndpoint,
    cache: new InMemoryCache(),
  }); 

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}> 

      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>

      </RainbowKitProvider>
    </WagmiConfig>

  );
}

export default MyApp;
