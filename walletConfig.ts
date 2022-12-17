import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  Chain
} from 'wagmi';

import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
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