const ethers = require("hardhat").ethers;
const {expect, assert} = require("chai");

describe("SimpleStorage", () => {
    // beforeEach tells what to do before each it
    // it is the code for running tests
    // we can also have describe inside
    // before running test we have to connect javascript to solidity same as deploy.js
    let simpleStorageFactory, simpleStorage;
    beforeEach(async () => {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await simpleStorageFactory.deploy();
        await simpleStorage.deployed();
    });

    it("Should start with favourite number 0", async () => {
        const currentVal = await simpleStorage.getNum();
        assert.equal(currentVal.toString(), "0");
    })
})