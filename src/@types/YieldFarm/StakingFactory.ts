/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer, BigNumberish } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import { Staking } from './Staking';

export class StakingFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _epoch1Start: BigNumberish,
    _epochDuration: BigNumberish,
    overrides?: Overrides
  ): Promise<Staking> {
    return super.deploy(
      _epoch1Start,
      _epochDuration,
      overrides || {}
    ) as Promise<Staking>;
  }

  getDeployTransaction(
    _epoch1Start: BigNumberish,
    _epochDuration: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _epoch1Start,
      _epochDuration,
      overrides || {}
    );
  }

  attach(address: string): Staking {
    return super.attach(address) as Staking;
  }

  connect(signer: Signer): StakingFactory {
    return super.connect(signer) as StakingFactory;
  }

  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_epoch1Start',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_epochDuration',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'Deposit',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'EmergencyWithdraw',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint128',
        name: 'epochId',
        type: 'uint128'
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'tokens',
        type: 'address[]'
      }
    ],
    name: 'ManualEpochInit',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'Withdraw',
    type: 'event'
  },
  {
    inputs: [],
    name: 'epoch1Start',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'epochDuration',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'tokens',
        type: 'address[]'
      },
      {
        internalType: 'uint128',
        name: 'epochId',
        type: 'uint128'
      }
    ],
    name: 'manualEpochInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address'
      }
    ],
    name: 'emergencyWithdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address'
      },
      {
        internalType: 'uint128',
        name: 'epochId',
        type: 'uint128'
      }
    ],
    name: 'getEpochUserBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address'
      }
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getCurrentEpoch',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address'
      },
      {
        internalType: 'uint128',
        name: 'epochId',
        type: 'uint128'
      }
    ],
    name: 'getEpochPoolSize',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'currentEpochMultiplier',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'prevBalance',
        type: 'uint256'
      },
      {
        internalType: 'uint128',
        name: 'prevMultiplier',
        type: 'uint128'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        internalType: 'uint128',
        name: 'currentMultiplier',
        type: 'uint128'
      }
    ],
    name: 'computeNewMultiplier',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address'
      },
      {
        internalType: 'uint128',
        name: 'epochId',
        type: 'uint128'
      }
    ],
    name: 'epochIsInitialized',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506040516123693803806123698339818101604052604081101561003357600080fd5b5080516020909101516001600081905591909155600255612310806100596000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063aa5791541161008c578063ea2c38ae11610066578063ea2c38ae14610268578063f3fef3a314610316578063f4a4341d14610342578063f7888aec1461034a576100cf565b8063aa5791541461020f578063b97dd9e214610258578063ce58a2a814610260576100cf565b80632ca32d7e146100d457806347e7ef241461011b5780634be41dba146101495780634ff0876a146101a15780636ff1c9bc146101a95780638c028dd0146101cf575b600080fd5b610109600480360360408110156100ea57600080fd5b5080356001600160a01b031690602001356001600160801b0316610378565b60408051918252519081900360200190f35b6101476004803603604081101561013157600080fd5b506001600160a01b038135169060200135610452565b005b6101856004803603608081101561015f57600080fd5b508035906001600160801b03602082013581169160408101359160609091013516611084565b604080516001600160801b039092168252519081900360200190f35b610109611108565b610147600480360360208110156101bf57600080fd5b50356001600160a01b031661110e565b610109600480360360608110156101e557600080fd5b5080356001600160a01b0390811691602081013590911690604001356001600160801b03166112cd565b6102446004803603604081101561022557600080fd5b5080356001600160a01b031690602001356001600160801b031661145e565b604080519115158252519081900360200190f35b610185611497565b6101856114c4565b6101476004803603604081101561027e57600080fd5b81019060208101813564010000000081111561029957600080fd5b8201836020820111156102ab57600080fd5b803590602001918460208302840111640100000000831117156102cd57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550505090356001600160801b0316915061150b9050565b6101476004803603604081101561032c57600080fd5b506001600160a01b03813516906020013561179a565b61010961202c565b6101096004803603604081101561036057600080fd5b506001600160a01b0381358116916020013516612032565b6000610384838361145e565b156103bc57506001600160a01b03821660009081526004602090815260408083206001600160801b038516845290915290205461044c565b6103c783600061145e565b6103d35750600061044c565b604080516370a0823160e01b8152306004820152905184916001600160a01b038316916370a0823191602480820192602092909190829003018186803b15801561041c57600080fd5b505afa158015610430573d6000803e3d6000fd5b505050506040513d602081101561044657600080fd5b50519150505b92915050565b600260005414156104aa576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260005580610501576040805162461bcd60e51b815260206004820152601b60248201527f5374616b696e673a20416d6f756e74206d757374206265203e20300000000000604482015290519081900360640190fd5b60408051636eb1769f60e11b8152336004820152306024820152905183916000916001600160a01b0384169163dd62ed3e916044808301926020929190829003018186803b15801561055257600080fd5b505afa158015610566573d6000803e3d6000fd5b505050506040513d602081101561057c57600080fd5b50519050828110156105bf5760405162461bcd60e51b81526004018080602001828103825260228152602001806122716022913960400191505060405180910390fd5b3360009081526003602090815260408083206001600160a01b03881684529091529020546105ed908461205d565b3360008181526003602090815260408083206001600160a01b038a811685529083528184209590955580516323b872dd60e01b815260048101949094523060248501526044840188905251938616936323b872dd93606480820194918390030190829087803b15801561065f57600080fd5b505af1158015610673573d6000803e3d6000fd5b505050506040513d602081101561068957600080fd5b5060009050610696611497565b905060006106a26114c4565b90506106ae868361145e565b61070e576040805160018082528183019092526060916020808301908036833701905050905086816000815181106106e257fe5b60200260200101906001600160a01b031690816001600160a01b03168152505061070c818461150b565b505b6001600160a01b0380871660009081526004602081815260408084206001600160801b036001890116855282529283902083516370a0823160e01b81523093810193909352925192938816926370a08231926024808201939291829003018186803b15801561077c57600080fd5b505afa158015610790573d6000803e3d6000fd5b505050506040513d60208110156107a657600080fd5b505181556001808201805460ff191690911790553360008181526005602090815260408083206001600160a01b038c1684529091528120916107e9908a876112cd565b825490915061099e57816040518060800160405280876001600160801b03168152602001866001600160801b03168152602001600081526020018a815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a8154816001600160801b0302191690836001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010155606082015181600201555050816040518060800160405280876001016001600160801b03168152602001670de0b6b3a76400006001600160801b031681526020018a81526020016000815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a8154816001600160801b0302191690836001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010155606082015181600201555050610fbe565b81546000198101906001600160801b038716908490839081106109bd57fe5b60009182526020909120600390910201546001600160801b03161015610c5a576000610a56610a468584815481106109f157fe5b600091825260209182902060408051608081018252600390930290910180546001600160801b038082168552600160801b909104169383019390935260018301549082015260029091015460608201526120b7565b670de0b6b3a76400008c89611084565b9050836040518060800160405280896001600160801b03168152602001836001600160801b03168152602001610a918786815481106109f157fe5b81526020018c815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a8154816001600160801b0302191690836001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010155606082015181600201555050836040518060800160405280896001016001600160801b03168152602001670de0b6b3a76400006001600160801b0316815260200160036000336001600160a01b03166001600160a01b0316815260200190815260200160002060008f6001600160a01b03166001600160a01b031681526020019081526020016000205481526020016000815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a8154816001600160801b0302191690836001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b031602179055506040820151816001015560608201518160020155505050610fbc565b856001600160801b0316838281548110610c7057fe5b60009182526020909120600390910201546001600160801b03161415610e8e57610cd6610ca28483815481106109f157fe5b848381548110610cae57fe5b6000918252602090912060039091020154600160801b90046001600160801b03168b88611084565b838281548110610ce257fe5b906000526020600020906003020160000160106101000a8154816001600160801b0302191690836001600160801b03160217905550610d4789848381548110610d2757fe5b90600052602060002090600302016002015461205d90919063ffffffff16565b838281548110610d5357fe5b906000526020600020906003020160020181905550826040518060800160405280886001016001600160801b03168152602001670de0b6b3a76400006001600160801b0316815260200160036000336001600160a01b03166001600160a01b0316815260200190815260200160002060008e6001600160a01b03166001600160a01b031681526020019081526020016000205481526020016000815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a8154816001600160801b0302191690836001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010155606082015181600201555050610fbc565b60018110158015610ecf5750856001600160801b0316836001830381548110610eb357fe5b60009182526020909120600390910201546001600160801b0316145b15610f7457610ef8610ee98460018403815481106109f157fe5b846001840381548110610cae57fe5b836001830381548110610f0757fe5b906000526020600020906003020160000160106101000a8154816001600160801b0302191690836001600160801b03160217905550610f4f89846001840381548110610d2757fe5b836001830381548110610f5e57fe5b9060005260206000209060030201600201819055505b3360009081526003602090815260408083206001600160a01b038e1684529091529020548354849083908110610fa657fe5b9060005260206000209060030201600101819055505b505b6000610fcb338b886112cd565b905061100d610fda82846120d4565b6001600160a01b038c1660009081526004602090815260408083206001600160801b038c1684529091529020549061205d565b6001600160a01b038b1660008181526004602090815260408083206001600160801b038c1684528252918290209390935580518c81529051919233927f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f629281900390910190a3505060016000555050505050505050565b6000806110ac670de0b6b3a76400006110a6886001600160801b038916612131565b9061218a565b905060006110cf670de0b6b3a76400006110a6876001600160801b038816612131565b905060006110fc6110e0898861205d565b6110a6670de0b6b3a76400006110f6878761205d565b90612131565b98975050505050505050565b60025481565b6001600160a01b038116600090815260066020526040902054600a906001600160801b031661113b611497565b036001600160801b031610156111825760405162461bcd60e51b815260040180806020018281038252602c815260200180612223602c913960400191505060405180910390fd5b3360009081526003602090815260408083206001600160a01b0385168452909152902054806111ed576040805162461bcd60e51b81526020600482015260126024820152710416d6f756e74206d757374206265203e20360741b604482015290519081900360640190fd5b3360008181526003602090815260408083206001600160a01b038716808552908352818420849055815163a9059cbb60e01b815260048101959095526024850186905290518694919363a9059cbb93604480850194919392918390030190829087803b15801561125c57600080fd5b505af1158015611270573d6000803e3d6000fd5b505050506040513d602081101561128657600080fd5b50506040805183815290516001600160a01b0385169133917ff24ef89f38eadc1bde50701ad6e4d6d11a2dc24f7cf834a486991f38833285049181900360200190a3505050565b6001600160a01b03808416600090815260056020908152604080832093861683529290529081208054158061132b57508060008154811061130a57fe5b60009182526020909120600390910201546001600160801b03908116908416105b1561133a576000915050611457565b805460009060001981019083908290811061135157fe5b60009182526020909120600390910201546001600160801b03908116908616106113e3576113d983828154811061138457fe5b600091825260209182902060408051608081018252600390930290910180546001600160801b038082168552600160801b909104169383019390935260018301549082015260029091015460608201526121f1565b9350505050611457565b818111156114425760006002600183850101049050856001600160801b031684828154811061140e57fe5b60009182526020909120600390910201546001600160801b0316116114355780925061143c565b6001810391505b506113e3565b61145183838154811061138457fe5b93505050505b9392505050565b6001600160a01b03821660009081526004602090815260408083206001600160801b038516845290915290206001015460ff1692915050565b60006001544210156114ab575060006114c1565b6002546001544203816114ba57fe5b0460010190505b90565b6000806114cf611497565b6002546001549192506001600160801b03831681029091019042820390600090670de0b6b3a764000083028161150157fe5b0494505050505090565b611513611497565b6001600160801b0316816001600160801b03161115611579576040805162461bcd60e51b815260206004820152601960248201527f63616e277420696e69742061206675747572652065706f636800000000000000604482015290519081900360640190fd5b60005b825181101561170c5760006004600085848151811061159757fe5b6020908102919091018101516001600160a01b0316825281810192909252604090810160009081206001600160801b03871680835293522091506115ee57600081556001808201805460ff19169091179055611703565b61160b8483815181106115fd57fe5b60200260200101518461145e565b156116475760405162461bcd60e51b815260040180806020018281038252602281526020018061224f6022913960400191505060405180910390fd5b61166784838151811061165657fe5b60200260200101516001850361145e565b6116a25760405162461bcd60e51b81526004018080602001828103825260278152602001806122936027913960400191505060405180910390fd5b600460008584815181106116b257fe5b6020908102919091018101516001600160a01b0316825281810192909252604090810160009081206001600160801b03600019880116825290925290205481556001818101805460ff191690911790555b5060010161157c565b50806001600160801b0316336001600160a01b03167fb85c32b8d9cecc81feba78646289584a693e9a8afea40ab2fd31efae4408429f846040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561178357818101518382015260200161176b565b505050509050019250505060405180910390a35050565b600260005414156117f2576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260009081553381526003602090815260408083206001600160a01b038616845290915290205481111561186e576040805162461bcd60e51b815260206004820152601a60248201527f5374616b696e673a2062616c616e636520746f6f20736d616c6c000000000000604482015290519081900360640190fd5b3360009081526003602090815260408083206001600160a01b038616845290915290205461189c90826120d4565b3360008181526003602090815260408083206001600160a01b03881680855290835281842095909555805163a9059cbb60e01b81526004810194909452602484018690525186949363a9059cbb9360448083019493928390030190829087803b15801561190857600080fd5b505af115801561191c573d6000803e3d6000fd5b505050506040513d602081101561193257600080fd5b506000905061193f611497565b6001600160a01b038516600090815260066020526040902080546fffffffffffffffffffffffffffffffff19166001600160801b0383161790559050611985848261145e565b6119e5576040805160018082528183019092526060916020808301908036833701905050905084816000815181106119b957fe5b60200260200101906001600160a01b031690816001600160a01b0316815250506119e3818361150b565b505b6001600160a01b0380851660009081526004602081815260408084206001600160801b036001880116855282529283902083516370a0823160e01b81523093810193909352925192938616926370a08231926024808201939291829003018186803b158015611a5357600080fd5b505afa158015611a67573d6000803e3d6000fd5b505050506040513d6020811015611a7d57600080fd5b505181556001808201805460ff191690911790553360009081526005602090815260408083206001600160a01b0389168452909152902080546000198101906001600160801b03851690839083908110611ad357fe5b60009182526020909120600390910201546001600160801b03161015611c9857816040518060800160405280866001600160801b03168152602001670de0b6b3a76400006001600160801b0316815260200160036000336001600160a01b03166001600160a01b0316815260200190815260200160002060008b6001600160a01b03166001600160a01b031681526020019081526020016000205481526020016000815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a8154816001600160801b0302191690836001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010155606082015181600201555050611c6686600460008a6001600160a01b03166001600160a01b031681526020019081526020016000206000876001600160801b03168152602001908152602001600020600001546120d490919063ffffffff16565b6001600160a01b03881660009081526004602090815260408083206001600160801b0389168452909152902055611fde565b836001600160801b0316828281548110611cae57fe5b60009182526020909120600390910201546001600160801b03161415611da1573360009081526003602090815260408083206001600160a01b038b1684529091529020548254839083908110611d0057fe5b9060005260206000209060030201600101819055506000828281548110611d2357fe5b906000526020600020906003020160020181905550670de0b6b3a7640000828281548110611d4d57fe5b60009182526020808320600390920290910180546001600160801b03948516600160801b029085161790556001600160a01b038a16825260048152604080832093881683529290522054611c6690876120d4565b6000826001830381548110611db257fe5b6000918252602080832060408051608081018252600390940290910180546001600160801b038082168652600160801b9091041692840192909252600182015490830152600281015460608301529250611e0b906121f1565b90508160020154881015611e9f576000611e4f83600201546110a6670de0b6b3a76400006001600160801b03166110f68760010154876120d490919063ffffffff16565b6002840154909150611e61908a6120d4565b600284018190556001840154611e8191670de0b6b3a76400009084611084565b83546001600160801b03918216600160801b02911617835550611ee9565b611ec4611eb983600201548a6120d490919063ffffffff16565b6001840154906120d4565b60018301556000600283015581546001600160801b03166503782dace9d960921b1782555b6040805160808101825283546001600160801b038082168352600160801b90910416602082015260018401549181019190915260028301546060820152600090611f32906121f1565b9050611f74611f4183836120d4565b6001600160a01b038c1660009081526004602090815260408083206001600160801b038d168452909152902054906120d4565b6001600160a01b038b1660008181526004602090815260408083206001600160801b038d168452825280832094909455338252600381528382209282529190915220548554869086908110611fc557fe5b9060005260206000209060030201600101819055505050505b6040805187815290516001600160a01b0389169133917f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb9181900360200190a3505060016000555050505050565b60015481565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b600082820183811015611457576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600061044c8260600151836040015161205d90919063ffffffff16565b60008282111561212b576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000826121405750600061044c565b8282028284828161214d57fe5b04146114575760405162461bcd60e51b81526004018080602001828103825260218152602001806122ba6021913960400191505060405180910390fd5b60008082116121e0576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816121e957fe5b049392505050565b600061044c670de0b6b3a76400006001600160801b03166110a684602001516001600160801b03166110f6866120b756fe4174206c656173742031302065706f636873206d757374207061737320776974686f757420737563636573735374616b696e673a2065706f636820616c726561647920696e697469616c697a65645374616b696e673a20546f6b656e20616c6c6f77616e636520746f6f20736d616c6c5374616b696e673a2070726576696f75732065706f6368206e6f7420696e697469616c697a6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220912af810d8051278a9e1ecc70e4011bbdc7a7084ca559c18951c758bc081753664736f6c634300060c0033';
