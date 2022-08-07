# README
OCTAV3

# What is it?

OCTAV3 is a decentralized music streaming platform that connects artists, listeners and advertisers. We are building a web3 enabled ad engine to create a fairer relationship between all three stakeholders.

# How it’s made

- Built with Zora, Polygon and nft.storage (IPFS):

**Front-end:**

- Client built on Next.js with TypeScript
- TailwindCSS and Ant Design to design components
- Ethers.js for front-end interaction with smart contracts
- WalletConnect and Web3Modal to connect to Polygon Mumbai testnet

**Back-end:**
- https://github.com/meta-web3-music/smart-contracts
- We used Zora’s contracts to allow artists to mint/transfer a song NFT and an advertisement NFT
- All contracts are deployed on Polygon Mumbai testnet
- All the data (i.e. ad images) and metadata is stored and queryable on IPFS through nft.storage

## How to use OCTAV3

- Sign into OCTAVE3 with your favorite wallet (MetaMask, Ledger Live)
- To mint an NFT, navigate to home screen, then click “Mint Song NFT” button. A modal will open, and you can set your NFT’s data there and set ad space price
- To advertise on the platform, click the “Ad marketplace” button in the header. Here you’ll have the option to rent ad space on a song of your choice

## Credits

- [https://github.com/thisisommore](https://github.com/thisisommore)
- [https://github.com/camarilla33](https://github.com/camarilla33)
- [https://github.com/personnamedmike](https://github.com/personnamedmike)
- [https://github.com/mbappai](https://github.com/mbappai)

# The MIT License (MIT)

Copyright © 2022 meta-web3-music

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.