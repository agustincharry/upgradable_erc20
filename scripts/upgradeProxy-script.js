const { ethers, upgrades } = require("hardhat");

const proxyAddress = "0xDa9024D6dbB4EE71d475189fB80DF3f2B69417A2";

async function main() {
  const MyContract = await ethers.getContractFactory("AgusToken");
  const my_contract = await upgrades.upgradeProxy(proxyAddress, MyContract);
  await my_contract.deployed();

  console.log("MyContract deployed to:", my_contract.address);
}



main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });