import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import {
    createConfig,
    configureChains,
    Chain
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { polygonMumbai } from "wagmi/chains"

const { chains, publicClient } = configureChains(
    [polygonMumbai],
    [
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'Octave Music Streaming',
    chains,
    //TODO in env
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? ""
});

export const Chains = chains
export const wagmiClient = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})