import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers, deployments } from 'hardhat'
import { expect } from 'chai'
import { Contract } from "ethers";

describe('SomeTest', () => {

    let deployer: SignerWithAddress;
    let user: SignerWithAddress

    before(async () => {
        
        [deployer, user] = await ethers.getSigners();

    })
    
    beforeEach(async () => {

        await deployments.fixture();

   })
   
   it('Should do something', async () => {
        
        expect(1+1).to.be.equals(2)

   })
})