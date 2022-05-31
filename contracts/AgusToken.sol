// SPDX-License-Identifier: MIT

pragma solidity ^0.8.14;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";


contract AgusToken is
    ERC20Upgradeable,
    UUPSUpgradeable,
    OwnableUpgradeable
{
    function initialize(uint256 initialSupply) public initializer {
        __ERC20_init("AgusToken", "AGT");
        __Ownable_init_unchained();
        __UUPSUpgradeable_init();
        _mint(msg.sender, initialSupply * (10**decimals()));
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyOwner
    {}

    function mint(address toAccount, uint256 amount) public onlyOwner {
        _mint(toAccount, amount);
    }

    function hello(string memory name) public pure returns(string memory){
        return string.concat("Hi ", name, "!");
    }

    function bye(string memory name) public pure returns(string memory){
        return string.concat("Bye ", name, "!");
    }
}