//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/security/Pausable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/interfaces/IERC20.sol';

contract Stadiums is ERC721, Ownable, Pausable {
    using Counters for Counters.Counter;

    constructor() ERC721("Stadiums", "STD") {}

    enum StadiumType {
        Moon,
        Mars,
        Chaos
    }

    address public wBNBAddress = 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c;

    function transferToMe(address _token, uint256 _amount) public {
        IERC20(_token).transferFrom(msg.sender, address(this), _amount);
    }

    function withdrawEther() external payable onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function withdrawToken(IERC20 _token) external onlyOwner {
    require(_token.transfer(msg.sender, _token.balanceOf(address(this))));
    }
}