"use client";
import { WagmiConfig } from "wagmi";
import "./globals.css";
import { Inter } from "next/font/google";
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
} from "@/env";
import { MultiAPILink } from "@habx/apollo-multi-endpoint-link";
import { AppWallet } from "@/context/AppWallet";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <html lang="en">
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
      </body>
    </html>
  );
}
