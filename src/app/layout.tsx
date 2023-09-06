/* eslint-disable @next/next/no-page-custom-font */
"use client";
import { WagmiConfig } from "wagmi";
import "./globals.css";
import Header from "@/components/Header/header";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { wagmiClient, Chains } from "../../walletConfig";
import {
  MuzikGraphQLEndpoint,
  Octav3GraphQLEndpoint,
  SpinampGraphQLEndpoint,
  SuperFluidGraphQLEndpoint,
} from "@/env";
import { MultiAPILink } from "@habx/apollo-multi-endpoint-link";
import { AppWallet } from "@/context/AppWallet";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = new ApolloClient({
    link: ApolloLink.from([
      new MultiAPILink({
        endpoints: {
          muzik: MuzikGraphQLEndpoint,
          spinamp: SpinampGraphQLEndpoint,
          octav3: Octav3GraphQLEndpoint,
          superfluid: SuperFluidGraphQLEndpoint,
        },
        httpSuffix: "",
        createHttpLink: () => {
          const res = createHttpLink();
          return res;
        },
      }),
    ]),
    cache: new InMemoryCache(),
  });
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Farro&display=swap"
          rel="stylesheet"
        />
        {/* testtest */}

        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script src="https://code.iconify.design/3/3.0.0/iconify.min.js" />
        <WagmiConfig config={wagmiClient}>
          <RainbowKitProvider
            chains={Chains}
            theme={lightTheme({
              accentColor: "#F3EA01",
              accentColorForeground: "#313131",
            })}
          >
            <ApolloProvider client={client}>
              <ThemeProvider attribute="class">
                <AppWallet>
                  <MusicPlayer />
                  <Header />
                  {children}
                </AppWallet>
              </ThemeProvider>
            </ApolloProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
