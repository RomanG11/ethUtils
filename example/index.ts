import { YieldContracts } from '../src';
import { ethers } from 'ethers';

const contracts = new YieldContracts(
  new ethers.providers.InfuraProvider('mainnet')
);
contracts.getCurrentEpoch().then(console.log);
