# AgusToken Graph

## Deploy to local node

### Info
```
https://thegraph.academy/developers/local-development/
```

### Install tools
```shell
npm install -g truffle ganache-cli
npm install -g @graphprotocol/graph-cli
```

### Run local ethereum blockchain
```shell
ganache-cli -h 0.0.0.0
```

### Run local The Graph node
```shell
git clone https://github.com/graphprotocol/graph-node/
cd graph-node/docker
docker-compose up
```

### Create sub graph (not necessary, is alredy created)
```shell
graph init --product hosted-service --from-contract <Address> agustincharry/agus-token-graph
```
**Note:** Indicate the ABI path.

### Deploy smart contract to Ganache
In the smart contract root folder...
```shell
npx hardhat clean
npx hardhat compile
npx hardhat run --network localhost scripts/deployProxy-script.js
```

**Note:** Copy the smart contract address.

### Deploy Subgraph to local node
In the graph folder...
```shell
Replace smart contract address in subgraph.yaml file.
npm run codegen
npm run create-local
npm run deploy-local
```

### Interact with the contract
```shell
npx hardhat console --network localhost
```
```JavaScript
const Contract = await ethers.getContractFactory('AgusToken');
const contract = await Contract.attach('0x155D3d3A820a8692dB4Ffa001A753960c22fC5aa');
await contract.transfer('0x4F641BD023Fe8fFD9368b3ff3BC9092f0F40F642', ethers.utils.parseUnits("2", "ether"))
```