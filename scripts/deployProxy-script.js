const { ethers, upgrades } = require("hardhat");

const initialSupply = 1000;

async function main() {
  const MyContract = await ethers.getContractFactory("AgusToken");
  const my_contract = await upgrades.deployProxy(MyContract, [initialSupply], { kind: "uups" });
  await my_contract.deployed();

  console.log("MyContract deployed to:", my_contract.address);
}



main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });