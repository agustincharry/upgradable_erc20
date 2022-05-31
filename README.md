# AgusToken

## Configure
### 1. Create ".secret" file
In the root folder of the project create a file ".secret" with the content of the mnemonic.

### 2. Create ".etherscan_secret" file
In the root folder of the project create a file ".etherscan_secret" with the etherscan API Key.

### 3. Create ".infura_secret" file
In the root folder of the project create a file ".infura_secret" with the Infura Key.

### 4. Install dependencies
```shell
npm install
```

## Deploy
```shell
npx hardhat clean
npx hardhat compile
npx hardhat run --network kovan scripts/deployProxy-script.js
```

## Verify in EtherScan
**Note:** Use the implementation address!

```shell
npx hardhat verify --network kovan 0x31a0d5e26b3d7ba82e28a6c3db61973c3b6823c7
```

## Upgrade contract
### 1. Update the script "scripts/upgradeProxy-script.js" with the proxy Address.
### 2. Update the contract with the changes.
### 3. Deploy the update.
```shell
npx hardhat clean
npx hardhat compile
npx hardhat run --network kovan scripts/upgradeProxy-script.js
```

## Verify the new implementation
**Note:** Use the implementation address!

```shell
npx hardhat verify --network kovan 0x80c4027c86dad5b19470713496b7779e729eaa9c
```

## Result

Proxy
0xDa9024D6dbB4EE71d475189fB80DF3f2B69417A2

Old Implementation
0x31a0d5e26b3d7ba82e28a6c3db61973c3b6823c7

New Implementation
0x80c4027c86dad5b19470713496b7779e729eaa9c