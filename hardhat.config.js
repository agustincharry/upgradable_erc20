require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require('hardhat-abi-exporter');

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const fs = require('fs');
const infuraKey = fs.readFileSync(".infura_secret").toString().trim();
const mnemonic = fs.readFileSync(".secret").toString().trim();
const etherscanAPIKey = fs.readFileSync(".etherscan_secret").toString().trim();

module.exports = {
  solidity: "0.8.14",
  networks: {
    kovan: {
      url: `https://kovan.infura.io/v3/${infuraKey}`,
      accounts: {mnemonic: mnemonic}
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraKey}`,
      accounts: {mnemonic: mnemonic}
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: etherscanAPIKey
  }
};