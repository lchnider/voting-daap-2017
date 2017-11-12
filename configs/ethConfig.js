
var ethconfig = {
	// abi : [ { constant: false,
	// 	inputs: [Array],
	// 	name: 'addParty',
	// 	outputs: [Array],
	// 	payable: false,
	// 	type: 'function' },
	//   { constant: true,
	// 	inputs: [Array],
	// 	name: 'validateBallotVoter',
	// 	outputs: [Array],
	// 	payable: false,
	// 	type: 'function' },
	//   { constant: true,
	// 	inputs: [],
	// 	name: 'getListOfParties',
	// 	outputs: [Array],
	// 	payable: false,
	// 	type: 'function' },
	//   { constant: false,
	// 	inputs: [Array],
	// 	name: 'addVoter',
	// 	outputs: [Array],
	// 	payable: false,
	// 	type: 'function' },
	//   { constant: false,
	// 	inputs: [Array],
	// 	name: 'doVoting',
	// 	outputs: [Array],
	// 	payable: false,
	// 	type: 'function' },
	//   { constant: true,
	// 	inputs: [Array],
	// 	name: 'getTotalVoteCountOfParty',
	// 	outputs: [Array],
	// 	payable: false,
	// 	type: 'function' },
	//   { inputs: [Array], payable: false, type: 'constructor' } ],
//	byteCode : '0x6060604052341561000f57600080fd5b604051610889380380610889833981016040528080518201919060200180519190602001805190910190505b60008054600160a060020a03191633600160a060020a031617815560048480516100699291602001906100df565b5050600682905560005b81518110156100d55781818151811061008857fe5b9060200190602002015160008281526002602052604081206001808201939093555580548082016100b9838261015e565b916000526020600020900160005b50829055505b600101610073565b5b505050506101a9565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061012057805160ff191683800117855561014d565b8280016001018555821561014d579182015b8281111561014d578251825591602001919060010190610132565b5b5061015a929150610188565b5090565b81548183558181151161018257600083815260209020610182918101908301610188565b5b505050565b6101a691905b8082111561015a576000815560010161018e565b5090565b90565b6106d1806101b86000396000f300606060405236156100755763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663089eae35811461007a5780634d6a6781146100a4578063814066b314610109578063aca8489214610170578063e9511c6e146101d5578063f41c7052146101ff575b600080fd5b341561008557600080fd5b610090600435610227565b604051901515815260200160405180910390f35b34156100af57600080fd5b61009060046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061027495505050505050565b604051901515815260200160405180910390f35b341561011457600080fd5b61011c610374565b60405160208082528190810183818151815260200191508051906020019060200280838360005b8381101561015c5780820151818401525b602001610143565b505050509050019250505060405180910390f35b341561017b57600080fd5b61009060046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061041795505050505050565b604051901515815260200160405180910390f35b34156101e057600080fd5b610090600435610590565b604051901515815260200160405180910390f35b341561020a57600080fd5b6102156004356105b2565b60405190815260200160405180910390f35b6001805481016000818152600260205260408120808401859055819055825490929080820161025683826105c9565b916000526020600020900160005b5082905550600191505b50919050565b60006003826040518082805190602001908083835b602083106102a957805182525b601f199092019160209182019101610289565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040519081900390206002015460ff161515600114801561035d57506003826040518082805190602001908083835b6020831061032357805182525b601f199092019160209182019101610303565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040519081900390205460ff16155b1561036a5750600161036e565b5060005b5b919050565b61037c6105f3565b6103846105f3565b6001546000906040518059106103975750595b908082528060200260200182016040525b509150600090505b60015481101561040e57600260006001838154811015156103cd57fe5b906000526020600020900160005b50548152602001908152602001600020600101548282815181106103fb57fe5b602090810290910101525b6001016103b0565b8192505b505090565b6000806003836040518082805190602001908083835b6020831061044d57805182525b601f19909201916020918201910161042d565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051908190039020805460ff1916911515919091179055816003816040518082805190602001908083835b602083106104c457805182525b601f1990920191602091820191016104a4565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060010190805161050b929160200190610605565b5060016003836040518082805190602001908083835b6020831061054157805182525b601f199092019160209182019101610521565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051908190039020600201805460ff19169115159190911790555060015b919050565b60008181526002602052604090208054600180820190925581905b5050919050565b600081815260026020526040902054805b50919050565b8154818355818115116105ed576000838152602090206105ed918101908301610684565b5b505050565b60206040519081016040526000815290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061064657805160ff1916838001178555610673565b82800160010185558215610673579182015b82811115610673578251825591602001919060010190610658565b5b50610680929150610684565b5090565b6106a291905b80821115610680576000815560010161068a565b5090565b905600a165627a7a723058208acf2b5c9423d01bee63debfe3feaa7656ba105a97b58d5ea8629efce89055f10029',
 	abi : [{"constant":false,"inputs":[{"name":"_partyName","type":"bytes32"}],"name":"addParty","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_adharNumber","type":"string"}],"name":"validateBallotVoter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getListOfParties","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_adharNumber","type":"string"}],"name":"addVoter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_partyId","type":"uint256"}],"name":"doVoting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_partyId","type":"uint256"}],"name":"getTotalVoteCountOfParty","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_ballotName","type":"string"},{"name":"_votingEndTime","type":"uint256"},{"name":"_partyNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],
 	byteCode : '0x6060604052341561000f57600080fd5b6040516109df3803806109df833981016040528080518201919060200180519060200190919080518201919050506000336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550836004908051906020019061009592919061013c565b5082600681905550600090505b81518110156101335781818151811015156100b957fe5b90602001906020020151600260008381526020019081526020016000206001018160001916905550600060026000838152602001908152602001600020600001819055506001805480600101828161011191906101bc565b91600052602060002090016000839091909150555080806001019150506100a2565b5050505061020d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061017d57805160ff19168380011785556101ab565b828001600101855582156101ab579182015b828111156101aa57825182559160200191906001019061018f565b5b5090506101b891906101e8565b5090565b8154818355818115116101e3578183600052602060002091820191016101e291906101e8565b5b505050565b61020a91905b808211156102065760008160009055506001016101ee565b5090565b90565b6107c38061021c6000396000f300606060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063089eae351461007d5780634d6a6781146100a4578063814066b314610119578063aca8489214610183578063e9511c6e146101e0578063f41c70521461021b575b600080fd5b341561008857600080fd5b6100a2600480803560001916906020019091905050610252565b005b34156100af57600080fd5b6100ff600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506102c6565b604051808215151515815260200191505060405180910390f35b341561012457600080fd5b61012c6103ee565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561016f578082015181840152602081019050610154565b505050509050019250505060405180910390f35b341561018e57600080fd5b6101de600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506104a4565b005b34156101eb57600080fd5b6102016004808035906020019091905050610638565b604051808215151515815260200191505060405180910390f35b341561022657600080fd5b61023c6004808035906020019091905050610689565b6040518082815260200191505060405180910390f35b6000600180805490500190508160026000838152602001908152602001600020600101816000191690555060006002600083815260200190815260200160002060000181905550600180548060010182816102ad91906106b2565b9160005260206000209001600083909190915055505050565b6000600115156003836040518082805190602001908083835b60208310151561030457805182526020820191506020810190506020830392506102df565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060020160009054906101000a900460ff1615151480156103d65750600015156003836040518082805190602001908083835b60208310151561038e5780518252602082019150602081019050602083039250610369565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060000160009054906101000a900460ff161515145b156103e457600190506103e9565b600090505b919050565b6103f66106de565b6103fe6106de565b60006001805490506040518059106104135750595b90808252806020026020018201604052509150600090505b60018054905081101561049c576002600060018381548110151561044b57fe5b906000526020600020900154815260200190815260200160002060010154828281518110151561047757fe5b906020019060200201906000191690816000191681525050808060010191505061042b565b819250505090565b60006003826040518082805190602001908083835b6020831015156104de57805182526020820191506020810190506020830392506104b9565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060000160006101000a81548160ff021916908315150217905550806003826040518082805190602001908083835b602083101515610564578051825260208201915060208101905060208303925061053f565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060010190805190602001906105ad9291906106f2565b5060016003826040518082805190602001908083835b6020831015156105e857805182526020820191506020810190506020830392506105c3565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060020160006101000a81548160ff02191690831515021790555050565b60008060008091506000905060026000858152602001908152602001600020600001549050600181016002600086815260200190815260200160002060000181905550600191508192505050919050565b600080600090506002600084815260200190815260200160002060000154905080915050919050565b8154818355818115116106d9578183600052602060002091820191016106d89190610772565b5b505050565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061073357805160ff1916838001178555610761565b82800160010185558215610761579182015b82811115610760578251825591602001919060010190610745565b5b50905061076e9190610772565b5090565b61079491905b80821115610790576000816000905550600101610778565b5090565b905600a165627a7a72305820eb4dd10ce5b32fe2e6799cb17da02c5feb28a83f5e4a497cdc1304429ca489910029',
	gas : '4700000',
	ethEndpoint : 'localhost:8545',
	passKey : 'vab-pc'
}


module.exports = ethconfig





// var ethconfig = {
// 	abi : [{"constant":false,"inputs":[{"name":"_partyName","type":"bytes32"}],"name":"addParty","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_adharNumber","type":"string"}],"name":"validateBallotVoter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getListOfParties","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_adharNumber","type":"string"}],"name":"addVoter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_partyId","type":"uint256"}],"name":"doVoting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_partyId","type":"uint256"}],"name":"getTotalVoteCountOfParty","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_ballotName","type":"string"},{"name":"_votingEndTime","type":"uint256"},{"name":"_partyNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],
// 	byteCode : '0x6060604052341561000f57600080fd5b6040516109df3803806109df833981016040528080518201919060200180519060200190919080518201919050506000336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550836004908051906020019061009592919061013c565b5082600681905550600090505b81518110156101335781818151811015156100b957fe5b90602001906020020151600260008381526020019081526020016000206001018160001916905550600060026000838152602001908152602001600020600001819055506001805480600101828161011191906101bc565b91600052602060002090016000839091909150555080806001019150506100a2565b5050505061020d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061017d57805160ff19168380011785556101ab565b828001600101855582156101ab579182015b828111156101aa57825182559160200191906001019061018f565b5b5090506101b891906101e8565b5090565b8154818355818115116101e3578183600052602060002091820191016101e291906101e8565b5b505050565b61020a91905b808211156102065760008160009055506001016101ee565b5090565b90565b6107c38061021c6000396000f300606060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063089eae351461007d5780634d6a6781146100a4578063814066b314610119578063aca8489214610183578063e9511c6e146101e0578063f41c70521461021b575b600080fd5b341561008857600080fd5b6100a2600480803560001916906020019091905050610252565b005b34156100af57600080fd5b6100ff600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506102c6565b604051808215151515815260200191505060405180910390f35b341561012457600080fd5b61012c6103ee565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561016f578082015181840152602081019050610154565b505050509050019250505060405180910390f35b341561018e57600080fd5b6101de600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506104a4565b005b34156101eb57600080fd5b6102016004808035906020019091905050610638565b604051808215151515815260200191505060405180910390f35b341561022657600080fd5b61023c6004808035906020019091905050610689565b6040518082815260200191505060405180910390f35b6000600180805490500190508160026000838152602001908152602001600020600101816000191690555060006002600083815260200190815260200160002060000181905550600180548060010182816102ad91906106b2565b9160005260206000209001600083909190915055505050565b6000600115156003836040518082805190602001908083835b60208310151561030457805182526020820191506020810190506020830392506102df565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060020160009054906101000a900460ff1615151480156103d65750600015156003836040518082805190602001908083835b60208310151561038e5780518252602082019150602081019050602083039250610369565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060000160009054906101000a900460ff161515145b156103e457600190506103e9565b600090505b919050565b6103f66106de565b6103fe6106de565b60006001805490506040518059106104135750595b90808252806020026020018201604052509150600090505b60018054905081101561049c576002600060018381548110151561044b57fe5b906000526020600020900154815260200190815260200160002060010154828281518110151561047757fe5b906020019060200201906000191690816000191681525050808060010191505061042b565b819250505090565b60006003826040518082805190602001908083835b6020831015156104de57805182526020820191506020810190506020830392506104b9565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060000160006101000a81548160ff021916908315150217905550806003826040518082805190602001908083835b602083101515610564578051825260208201915060208101905060208303925061053f565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060010190805190602001906105ad9291906106f2565b5060016003826040518082805190602001908083835b6020831015156105e857805182526020820191506020810190506020830392506105c3565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060020160006101000a81548160ff02191690831515021790555050565b60008060008091506000905060026000858152602001908152602001600020600001549050600181016002600086815260200190815260200160002060000181905550600191508192505050919050565b600080600090506002600084815260200190815260200160002060000154905080915050919050565b8154818355818115116106d9578183600052602060002091820191016106d89190610772565b5b505050565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061073357805160ff1916838001178555610761565b82800160010185558215610761579182015b82811115610760578251825591602001919060010190610745565b5b50905061076e9190610772565b5090565b61079491905b80821115610790576000816000905550600101610778565b5090565b905600a165627a7a72305820eb4dd10ce5b32fe2e6799cb17da02c5feb28a83f5e4a497cdc1304429ca489910029',
// 	//abi : [{"constant":true,"inputs":[{"name":"_adharNumber","type":"string"}],"name":"validateBallotVoter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getListOfParties","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_adharNumber","type":"string"}],"name":"addVoter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_partyId","type":"uint256"},{"name":"_partyName","type":"bytes32"}],"name":"addParty","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_partyId","type":"uint256"}],"name":"doVoting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_partyId","type":"uint256"}],"name":"getTotalVoteCountOfParty","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_ballotName","type":"string"},{"name":"_votingEndTime","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}] ,
// 	//byteCode : '0x6060604052341561000f57600080fd5b60405161094f38038061094f83398101604052808051820191906020018051906020019091905050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816004908051906020019061008d92919061009c565b50806006819055505050610141565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100dd57805160ff191683800117855561010b565b8280016001018555821561010b579182015b8281111561010a5782518255916020019190600101906100ef565b5b509050610118919061011c565b5090565b61013e91905b8082111561013a576000816000905550600101610122565b5090565b90565b6107ff806101506000396000f300606060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634d6a67811461007d578063814066b3146100f2578063aca848921461015c578063b1cf13bd146101d1578063e9511c6e14610219578063f41c705214610254575b600080fd5b341561008857600080fd5b6100d8600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061028b565b604051808215151515815260200191505060405180910390f35b34156100fd57600080fd5b6101056103b3565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561014857808201518184015260208101905061012d565b505050509050019250505060405180910390f35b341561016757600080fd5b6101b7600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610469565b604051808215151515815260200191505060405180910390f35b34156101dc57600080fd5b6101ff600480803590602001909190803560001916906020019091905050610604565b604051808215151515815260200191505060405180910390f35b341561022457600080fd5b61023a6004808035906020019091905050610674565b604051808215151515815260200191505060405180910390f35b341561025f57600080fd5b61027560048080359060200190919050506106c5565b6040518082815260200191505060405180910390f35b6000600115156003836040518082805190602001908083835b6020831015156102c957805182526020820191506020810190506020830392506102a4565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060020160009054906101000a900460ff16151514801561039b5750600015156003836040518082805190602001908083835b602083101515610353578051825260208201915060208101905060208303925061032e565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060000160009054906101000a900460ff161515145b156103a957600190506103ae565b600090505b919050565b6103bb6106ee565b6103c36106ee565b60006001805490506040518059106103d85750595b90808252806020026020018201604052509150600090505b600180549050811015610461576002600060018381548110151561041057fe5b906000526020600020900154815260200190815260200160002060010154828281518110151561043c57fe5b90602001906020020190600019169081600019168152505080806001019150506103f0565b819250505090565b6000806003836040518082805190602001908083835b6020831015156104a4578051825260208201915060208101905060208303925061047f565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060000160006101000a81548160ff021916908315150217905550816003836040518082805190602001908083835b60208310151561052a5780518252602082019150602081019050602083039250610505565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206001019080519060200190610573929190610702565b5060016003836040518082805190602001908083835b6020831015156105ae5780518252602082019150602081019050602083039250610589565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060020160006101000a81548160ff02191690831515021790555060019050919050565b60008160026000858152602001908152602001600020600101816000191690555060006002600085815260200190815260200160002060000181905550600180548060010182816106559190610782565b9160005260206000209001600085909190915055506001905092915050565b60008060008091506000905060026000858152602001908152602001600020600001549050600181016002600086815260200190815260200160002060000181905550600191508192505050919050565b600080600090506002600084815260200190815260200160002060000154905080915050919050565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061074357805160ff1916838001178555610771565b82800160010185558215610771579182015b82811115610770578251825591602001919060010190610755565b5b50905061077e91906107ae565b5090565b8154818355818115116107a9578183600052602060002091820191016107a891906107ae565b5b505050565b6107d091905b808211156107cc5760008160009055506001016107b4565b5090565b905600a165627a7a72305820091e55a925694bbf207059b498c576b2e52b3debc9af9b0af539bd21c8290c7c0029',
// 	gas : '4700000',
// 	ethEndpoint : 'localhost:8545',
// 	passKey : 'vab-pc'
// }


// module.exports = ethconfig

