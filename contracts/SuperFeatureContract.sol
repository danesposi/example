//SPDX-License-Identifier: Unlicense
pragma solidity >= 0.8.9;


// FEATURE 1: Cambiar TemplateContract -> FeatureContract (CHECK :) ). 

contract SuperFeatureContract {

    address mySpecialOwner;

    constructor(address _owner) {
        mySpecialOwner = _owner;
    }

}
