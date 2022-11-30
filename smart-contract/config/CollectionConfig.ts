import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'PataconFriends',
  tokenName: 'Patacon Friends',
  tokenSymbol: 'PTCF',
  hiddenMetadataUri: 'ipfs://CID/hidden.json',
  maxSupply: 100,
  whitelistSale: {
    price:  70,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 70,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 39,
    maxMintAmountPerTx: 2,
  },
  contractAddress: "0xeFBD5cA95Cac153E2168FcA850ADFf51bA088285",
  marketplaceIdentifier: 'patacon-friends',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
