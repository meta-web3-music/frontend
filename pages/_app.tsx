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
            accentColor: "#a67968",
          })}
        >
          <ApolloProvider client={client}>
            <ThemeProvider attribute="class">
              <Component {...pageProps} />
            </ThemeProvider>
          </ApolloProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
