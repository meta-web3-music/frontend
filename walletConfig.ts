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
// 9000: "https://eth.bd.evmos.dev:8545/",
const tEvmos: Chain = {
  id: 9000,
  name: "Evmos Testnet",
  network: "tevmos",
  rpcUrls: {
    default: "https://eth.bd.evmos.dev:8545"
  },
  blockExplorers: {
    default: {
      name: "Evmos Explorer",
      url: "https://evm.evmos.dev",
    }
  },
  nativeCurrency: {
    name: "EVMOS",
    decimals: 18,
    symbol: "tEVMOS"
  },
  testnet: true
}


const { chains, provider } = configureChains(
  [tEvmos],
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