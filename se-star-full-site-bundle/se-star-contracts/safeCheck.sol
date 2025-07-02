// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SafeCheck {
    mapping(address => bool) public confirmedOnChain;
    event Verified(address user);

    function confirmTransaction() public {
        confirmedOnChain[msg.sender] = true;
        emit Verified(msg.sender);
    }

    function isSafe(address user) public view returns (bool) {
        return confirmedOnChain[user];
    }
}