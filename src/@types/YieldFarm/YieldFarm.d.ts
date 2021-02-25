/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from 'ethers';
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface YieldFarmInterface extends ethers.utils.Interface {
  functions: {
    'NR_OF_EPOCHS()': FunctionFragment;
    'TOTAL_DISTRIBUTED_AMOUNT()': FunctionFragment;
    'epochDuration()': FunctionFragment;
    'epochStart()': FunctionFragment;
    'lastInitializedEpoch()': FunctionFragment;
    'massHarvest()': FunctionFragment;
    'harvest(uint128)': FunctionFragment;
    'getPoolSize(uint128)': FunctionFragment;
    'getCurrentEpoch()': FunctionFragment;
    'getEpochStake(address,uint128)': FunctionFragment;
    'userLastEpochIdHarvested()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'NR_OF_EPOCHS',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'TOTAL_DISTRIBUTED_AMOUNT',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'epochDuration',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'epochStart',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'lastInitializedEpoch',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'massHarvest',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'harvest',
    values: [BigNumberish]
  ): string;

  encodeFunctionData(
    functionFragment: 'getPoolSize',
    values: [BigNumberish]
  ): string;

  encodeFunctionData(
    functionFragment: 'getCurrentEpoch',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'getEpochStake',
    values: [string, BigNumberish]
  ): string;

  encodeFunctionData(
    functionFragment: 'userLastEpochIdHarvested',
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: 'NR_OF_EPOCHS',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'TOTAL_DISTRIBUTED_AMOUNT',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'epochDuration',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'epochStart', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'lastInitializedEpoch',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'massHarvest',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'harvest', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'getPoolSize',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'getCurrentEpoch',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'getEpochStake',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'userLastEpochIdHarvested',
    data: BytesLike
  ): Result;

  events: {
    'Harvest(address,uint128,uint256)': EventFragment;
    'MassHarvest(address,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Harvest'): EventFragment;

  getEvent(nameOrSignatureOrTopic: 'MassHarvest'): EventFragment;
}

export class YieldFarm extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;

  attach(addressOrName: string): this;

  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;

  once(event: EventFilter | string, listener: Listener): this;

  addListener(eventName: EventFilter | string, listener: Listener): this;

  removeAllListeners(eventName: EventFilter | string): this;

  removeListener(eventName: any, listener: Listener): this;

  interface: YieldFarmInterface;

  functions: {
    NR_OF_EPOCHS(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'NR_OF_EPOCHS()'(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    TOTAL_DISTRIBUTED_AMOUNT(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'TOTAL_DISTRIBUTED_AMOUNT()'(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    epochDuration(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'epochDuration()'(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    epochStart(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'epochStart()'(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    lastInitializedEpoch(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'lastInitializedEpoch()'(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    massHarvest(overrides?: Overrides): Promise<ContractTransaction>;

    'massHarvest()'(overrides?: Overrides): Promise<ContractTransaction>;

    harvest(
      epochId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'harvest(uint128)'(
      epochId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getPoolSize(
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'getPoolSize(uint128)'(
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getCurrentEpoch(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'getCurrentEpoch()'(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getEpochStake(
      userAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'getEpochStake(address,uint128)'(
      userAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    userLastEpochIdHarvested(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'userLastEpochIdHarvested()'(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  NR_OF_EPOCHS(overrides?: CallOverrides): Promise<BigNumber>;

  'NR_OF_EPOCHS()'(overrides?: CallOverrides): Promise<BigNumber>;

  TOTAL_DISTRIBUTED_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

  'TOTAL_DISTRIBUTED_AMOUNT()'(overrides?: CallOverrides): Promise<BigNumber>;

  epochDuration(overrides?: CallOverrides): Promise<BigNumber>;

  'epochDuration()'(overrides?: CallOverrides): Promise<BigNumber>;

  epochStart(overrides?: CallOverrides): Promise<BigNumber>;

  'epochStart()'(overrides?: CallOverrides): Promise<BigNumber>;

  lastInitializedEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  'lastInitializedEpoch()'(overrides?: CallOverrides): Promise<BigNumber>;

  massHarvest(overrides?: Overrides): Promise<ContractTransaction>;

  'massHarvest()'(overrides?: Overrides): Promise<ContractTransaction>;

  harvest(
    epochId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'harvest(uint128)'(
    epochId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getPoolSize(
    epochId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  'getPoolSize(uint128)'(
    epochId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  'getCurrentEpoch()'(overrides?: CallOverrides): Promise<BigNumber>;

  getEpochStake(
    userAddress: string,
    epochId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  'getEpochStake(address,uint128)'(
    userAddress: string,
    epochId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  userLastEpochIdHarvested(overrides?: CallOverrides): Promise<BigNumber>;

  'userLastEpochIdHarvested()'(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    NR_OF_EPOCHS(overrides?: CallOverrides): Promise<BigNumber>;

    'NR_OF_EPOCHS()'(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_DISTRIBUTED_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    'TOTAL_DISTRIBUTED_AMOUNT()'(overrides?: CallOverrides): Promise<BigNumber>;

    epochDuration(overrides?: CallOverrides): Promise<BigNumber>;

    'epochDuration()'(overrides?: CallOverrides): Promise<BigNumber>;

    epochStart(overrides?: CallOverrides): Promise<BigNumber>;

    'epochStart()'(overrides?: CallOverrides): Promise<BigNumber>;

    lastInitializedEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    'lastInitializedEpoch()'(overrides?: CallOverrides): Promise<BigNumber>;

    massHarvest(overrides?: CallOverrides): Promise<BigNumber>;

    'massHarvest()'(overrides?: CallOverrides): Promise<BigNumber>;

    harvest(
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'harvest(uint128)'(
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolSize(
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'getPoolSize(uint128)'(
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    'getCurrentEpoch()'(overrides?: CallOverrides): Promise<BigNumber>;

    getEpochStake(
      userAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'getEpochStake(address,uint128)'(
      userAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userLastEpochIdHarvested(overrides?: CallOverrides): Promise<BigNumber>;

    'userLastEpochIdHarvested()'(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    Harvest(
      user: string | null,
      epochId: BigNumberish | null,
      amount: null
    ): EventFilter;

    MassHarvest(
      user: string | null,
      epochsHarvested: null,
      totalValue: null
    ): EventFilter;
  };

  estimateGas: {
    NR_OF_EPOCHS(overrides?: CallOverrides): Promise<BigNumber>;

    'NR_OF_EPOCHS()'(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_DISTRIBUTED_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    'TOTAL_DISTRIBUTED_AMOUNT()'(overrides?: CallOverrides): Promise<BigNumber>;

    epochDuration(overrides?: CallOverrides): Promise<BigNumber>;

    'epochDuration()'(overrides?: CallOverrides): Promise<BigNumber>;

    epochStart(overrides?: CallOverrides): Promise<BigNumber>;

    'epochStart()'(overrides?: CallOverrides): Promise<BigNumber>;

    lastInitializedEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    'lastInitializedEpoch()'(overrides?: CallOverrides): Promise<BigNumber>;

    massHarvest(overrides?: Overrides): Promise<BigNumber>;

    'massHarvest()'(overrides?: Overrides): Promise<BigNumber>;

    harvest(epochId: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    'harvest(uint128)'(
      epochId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getPoolSize(
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'getPoolSize(uint128)'(
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    'getCurrentEpoch()'(overrides?: CallOverrides): Promise<BigNumber>;

    getEpochStake(
      userAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'getEpochStake(address,uint128)'(
      userAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userLastEpochIdHarvested(overrides?: CallOverrides): Promise<BigNumber>;

    'userLastEpochIdHarvested()'(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    NR_OF_EPOCHS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'NR_OF_EPOCHS()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOTAL_DISTRIBUTED_AMOUNT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'TOTAL_DISTRIBUTED_AMOUNT()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    epochDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'epochDuration()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epochStart(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'epochStart()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastInitializedEpoch(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'lastInitializedEpoch()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    massHarvest(overrides?: Overrides): Promise<PopulatedTransaction>;

    'massHarvest()'(overrides?: Overrides): Promise<PopulatedTransaction>;

    harvest(
      epochId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'harvest(uint128)'(
      epochId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getPoolSize(
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'getPoolSize(uint128)'(
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getCurrentEpoch()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEpochStake(
      userAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'getEpochStake(address,uint128)'(
      userAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userLastEpochIdHarvested(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'userLastEpochIdHarvested()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
