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

interface StakingInterface extends ethers.utils.Interface {
  functions: {
    'epoch1Start()': FunctionFragment;
    'epochDuration()': FunctionFragment;
    'deposit(address,uint256)': FunctionFragment;
    'withdraw(address,uint256)': FunctionFragment;
    'manualEpochInit(address[],uint128)': FunctionFragment;
    'emergencyWithdraw(address)': FunctionFragment;
    'getEpochUserBalance(address,address,uint128)': FunctionFragment;
    'balanceOf(address,address)': FunctionFragment;
    'getCurrentEpoch()': FunctionFragment;
    'getEpochPoolSize(address,uint128)': FunctionFragment;
    'currentEpochMultiplier()': FunctionFragment;
    'computeNewMultiplier(uint256,uint128,uint256,uint128)': FunctionFragment;
    'epochIsInitialized(address,uint128)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'epoch1Start',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'epochDuration',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'deposit',
    values: [string, BigNumberish]
  ): string;

  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [string, BigNumberish]
  ): string;

  encodeFunctionData(
    functionFragment: 'manualEpochInit',
    values: [string[], BigNumberish]
  ): string;

  encodeFunctionData(
    functionFragment: 'emergencyWithdraw',
    values: [string]
  ): string;

  encodeFunctionData(
    functionFragment: 'getEpochUserBalance',
    values: [string, string, BigNumberish]
  ): string;

  encodeFunctionData(
    functionFragment: 'balanceOf',
    values: [string, string]
  ): string;

  encodeFunctionData(
    functionFragment: 'getCurrentEpoch',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'getEpochPoolSize',
    values: [string, BigNumberish]
  ): string;

  encodeFunctionData(
    functionFragment: 'currentEpochMultiplier',
    values?: undefined
  ): string;

  encodeFunctionData(
    functionFragment: 'computeNewMultiplier',
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  encodeFunctionData(
    functionFragment: 'epochIsInitialized',
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: 'epoch1Start',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'epochDuration',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;

  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'manualEpochInit',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'emergencyWithdraw',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'getEpochUserBalance',
    data: BytesLike
  ): Result;

  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;

  decodeFunctionResult(
    functionFragment: 'getCurrentEpoch',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'getEpochPoolSize',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'currentEpochMultiplier',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'computeNewMultiplier',
    data: BytesLike
  ): Result;

  decodeFunctionResult(
    functionFragment: 'epochIsInitialized',
    data: BytesLike
  ): Result;

  events: {
    'Deposit(address,address,uint256)': EventFragment;
    'EmergencyWithdraw(address,address,uint256)': EventFragment;
    'ManualEpochInit(address,uint128,address[])': EventFragment;
    'Withdraw(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment;

  getEvent(nameOrSignatureOrTopic: 'EmergencyWithdraw'): EventFragment;

  getEvent(nameOrSignatureOrTopic: 'ManualEpochInit'): EventFragment;

  getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment;
}

export class Staking extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;

  attach(addressOrName: string): this;

  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;

  once(event: EventFilter | string, listener: Listener): this;

  addListener(eventName: EventFilter | string, listener: Listener): this;

  removeAllListeners(eventName: EventFilter | string): this;

  removeListener(eventName: any, listener: Listener): this;

  interface: StakingInterface;

  functions: {
    epoch1Start(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'epoch1Start()'(
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

    deposit(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'deposit(address,uint256)'(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdraw(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'withdraw(address,uint256)'(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    manualEpochInit(
      tokens: string[],
      epochId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'manualEpochInit(address[],uint128)'(
      tokens: string[],
      epochId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      tokenAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'emergencyWithdraw(address)'(
      tokenAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getEpochUserBalance(
      user: string,
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'getEpochUserBalance(address,address,uint128)'(
      user: string,
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    balanceOf(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'balanceOf(address,address)'(
      user: string,
      token: string,
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

    getEpochPoolSize(
      tokenAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'getEpochPoolSize(address,uint128)'(
      tokenAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    currentEpochMultiplier(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'currentEpochMultiplier()'(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    computeNewMultiplier(
      prevBalance: BigNumberish,
      prevMultiplier: BigNumberish,
      amount: BigNumberish,
      currentMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'computeNewMultiplier(uint256,uint128,uint256,uint128)'(
      prevBalance: BigNumberish,
      prevMultiplier: BigNumberish,
      amount: BigNumberish,
      currentMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    epochIsInitialized(
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    'epochIsInitialized(address,uint128)'(
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;
  };

  epoch1Start(overrides?: CallOverrides): Promise<BigNumber>;

  'epoch1Start()'(overrides?: CallOverrides): Promise<BigNumber>;

  epochDuration(overrides?: CallOverrides): Promise<BigNumber>;

  'epochDuration()'(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    tokenAddress: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'deposit(address,uint256)'(
    tokenAddress: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(
    tokenAddress: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'withdraw(address,uint256)'(
    tokenAddress: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  manualEpochInit(
    tokens: string[],
    epochId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'manualEpochInit(address[],uint128)'(
    tokens: string[],
    epochId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    tokenAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'emergencyWithdraw(address)'(
    tokenAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getEpochUserBalance(
    user: string,
    token: string,
    epochId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  'getEpochUserBalance(address,address,uint128)'(
    user: string,
    token: string,
    epochId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOf(
    user: string,
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  'balanceOf(address,address)'(
    user: string,
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  'getCurrentEpoch()'(overrides?: CallOverrides): Promise<BigNumber>;

  getEpochPoolSize(
    tokenAddress: string,
    epochId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  'getEpochPoolSize(address,uint128)'(
    tokenAddress: string,
    epochId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  currentEpochMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  'currentEpochMultiplier()'(overrides?: CallOverrides): Promise<BigNumber>;

  computeNewMultiplier(
    prevBalance: BigNumberish,
    prevMultiplier: BigNumberish,
    amount: BigNumberish,
    currentMultiplier: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  'computeNewMultiplier(uint256,uint128,uint256,uint128)'(
    prevBalance: BigNumberish,
    prevMultiplier: BigNumberish,
    amount: BigNumberish,
    currentMultiplier: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  epochIsInitialized(
    token: string,
    epochId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  'epochIsInitialized(address,uint128)'(
    token: string,
    epochId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    epoch1Start(overrides?: CallOverrides): Promise<BigNumber>;

    'epoch1Start()'(overrides?: CallOverrides): Promise<BigNumber>;

    epochDuration(overrides?: CallOverrides): Promise<BigNumber>;

    'epochDuration()'(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    'deposit(address,uint256)'(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    'withdraw(address,uint256)'(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    manualEpochInit(
      tokens: string[],
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    'manualEpochInit(address[],uint128)'(
      tokens: string[],
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyWithdraw(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    'emergencyWithdraw(address)'(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getEpochUserBalance(
      user: string,
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'getEpochUserBalance(address,address,uint128)'(
      user: string,
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'balanceOf(address,address)'(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    'getCurrentEpoch()'(overrides?: CallOverrides): Promise<BigNumber>;

    getEpochPoolSize(
      tokenAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'getEpochPoolSize(address,uint128)'(
      tokenAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentEpochMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    'currentEpochMultiplier()'(overrides?: CallOverrides): Promise<BigNumber>;

    computeNewMultiplier(
      prevBalance: BigNumberish,
      prevMultiplier: BigNumberish,
      amount: BigNumberish,
      currentMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'computeNewMultiplier(uint256,uint128,uint256,uint128)'(
      prevBalance: BigNumberish,
      prevMultiplier: BigNumberish,
      amount: BigNumberish,
      currentMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    epochIsInitialized(
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    'epochIsInitialized(address,uint128)'(
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    Deposit(
      user: string | null,
      tokenAddress: string | null,
      amount: null
    ): EventFilter;

    EmergencyWithdraw(
      user: string | null,
      tokenAddress: string | null,
      amount: null
    ): EventFilter;

    ManualEpochInit(
      caller: string | null,
      epochId: BigNumberish | null,
      tokens: null
    ): EventFilter;

    Withdraw(
      user: string | null,
      tokenAddress: string | null,
      amount: null
    ): EventFilter;
  };

  estimateGas: {
    epoch1Start(overrides?: CallOverrides): Promise<BigNumber>;

    'epoch1Start()'(overrides?: CallOverrides): Promise<BigNumber>;

    epochDuration(overrides?: CallOverrides): Promise<BigNumber>;

    'epochDuration()'(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    'deposit(address,uint256)'(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdraw(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    'withdraw(address,uint256)'(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    manualEpochInit(
      tokens: string[],
      epochId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    'manualEpochInit(address[],uint128)'(
      tokens: string[],
      epochId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    emergencyWithdraw(
      tokenAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    'emergencyWithdraw(address)'(
      tokenAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getEpochUserBalance(
      user: string,
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'getEpochUserBalance(address,address,uint128)'(
      user: string,
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'balanceOf(address,address)'(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    'getCurrentEpoch()'(overrides?: CallOverrides): Promise<BigNumber>;

    getEpochPoolSize(
      tokenAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'getEpochPoolSize(address,uint128)'(
      tokenAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentEpochMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    'currentEpochMultiplier()'(overrides?: CallOverrides): Promise<BigNumber>;

    computeNewMultiplier(
      prevBalance: BigNumberish,
      prevMultiplier: BigNumberish,
      amount: BigNumberish,
      currentMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'computeNewMultiplier(uint256,uint128,uint256,uint128)'(
      prevBalance: BigNumberish,
      prevMultiplier: BigNumberish,
      amount: BigNumberish,
      currentMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    epochIsInitialized(
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'epochIsInitialized(address,uint128)'(
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    epoch1Start(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'epoch1Start()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epochDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'epochDuration()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'deposit(address,uint256)'(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'withdraw(address,uint256)'(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    manualEpochInit(
      tokens: string[],
      epochId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'manualEpochInit(address[],uint128)'(
      tokens: string[],
      epochId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      tokenAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'emergencyWithdraw(address)'(
      tokenAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getEpochUserBalance(
      user: string,
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'getEpochUserBalance(address,address,uint128)'(
      user: string,
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'balanceOf(address,address)'(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getCurrentEpoch()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEpochPoolSize(
      tokenAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'getEpochPoolSize(address,uint128)'(
      tokenAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentEpochMultiplier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'currentEpochMultiplier()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    computeNewMultiplier(
      prevBalance: BigNumberish,
      prevMultiplier: BigNumberish,
      amount: BigNumberish,
      currentMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'computeNewMultiplier(uint256,uint128,uint256,uint128)'(
      prevBalance: BigNumberish,
      prevMultiplier: BigNumberish,
      amount: BigNumberish,
      currentMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    epochIsInitialized(
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'epochIsInitialized(address,uint128)'(
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
