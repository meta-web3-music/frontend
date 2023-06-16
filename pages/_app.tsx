// TODO use alias import instead of ../ where possible
import type { AppProps } from "next/app";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { GraphQLEndpoint } from "../src/env";
import { wagmiClient, Chains as chains } from "../walletConfig";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { ThemeProvider } from "next-themes";
import "../src/app/globals.css"
import Script from "next/script";
import MusicPlayer from "../src/components/MusicPlayer/MusicPlayer";
import Header from "../src/components/Header/header";
import { NextPage } from "next";
import React, { ReactElement } from "react";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const client = new ApolloClient({
    uri: GraphQLEndpoint,
    cache: new InMemoryCache(),
  });
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Script src="https://code.iconify.design/3/3.0.0/iconify.min.js" />
      <WagmiConfig config={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          theme={lightTheme({
            accentColor: "#F3EA01",
            accentColorForeground: "#313131",
          })}
        >
          <ApolloProvider client={client}>
            <ThemeProvider attribute="class">
              <MusicPlayer />
              <Header />
              {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
          </ApolloProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
