import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { GraphQLEndpoint } from "../src/env";
import { wagmiClient, Chains as chains } from "../walletConfig";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import MusicPlayer from "../src/components/MusicPlayer/MusicPlayer";
import Header from "../src/components/Header/header";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: GraphQLEndpoint,
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Script src="https://code.iconify.design/3/3.0.0/iconify.min.js" />
      <WagmiConfig client={wagmiClient}>
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
              <Layout Component={Component} pageProps={pageProps} />
            </ThemeProvider>
          </ApolloProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

const Layout = ({ Component, pageProps }: any) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};

export default MyApp;
