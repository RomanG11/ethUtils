import { ethers } from 'ethers';
import { StakingFactory } from '../@types/YieldFarm/StakingFactory';
import { Staking } from '../@types/YieldFarm/Staking';

export class YieldContracts {
  private provider: ethers.providers.JsonRpcProvider;
  private contractAddress = '0xb0Fa2BeEe3Cf36a7Ac7E99B885b48538Ab364853';
  private stakingInstance: Staking;

  constructor(provider: ethers.providers.JsonRpcProvider) {
    this.provider = provider;
    this.stakingInstance = StakingFactory.connect(
      this.contractAddress,
      this.provider
    );
  }

  async getCurrentEpoch() {
    return this.stakingInstance.getCurrentEpoch();
  }
}
