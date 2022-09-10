import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

 const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.polygonMumbai, chain.optimism, chain.arbitrum],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_KEY }),
    publicProvider() 
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Octave Music Streaming',
  chains
});

export const Chains = chains 
export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})