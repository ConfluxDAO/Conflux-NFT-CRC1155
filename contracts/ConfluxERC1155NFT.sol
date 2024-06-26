// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ConfluxERC1155NFT is ERC1155, Ownable {
    // Token name
    string public name;
    // Token symbol
    string public symbol;

    //  Replace the example tokenURI with the actual metadata URI for the NFT
    constructor(
        string memory name_,
        string memory symbol_
    )
        ERC1155(
            "https://raw.githubusercontent.com/conflux-fans/dual-space-nft-metadata/main/2023040104"
        )
        Ownable(msg.sender)
    {
        name = name_;
        symbol = symbol_;
    }

    function mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public onlyOwner {
        _mint(to, id, amount, data);
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }
}
