// run is used to run hardhat commands
const { ethers, run } = require('hardhat');

const ether = require('hardhat').ethers;


const main = async () => {
    // here hardhat makes it easier and we don't have to give bin and abi 
    // as hardhat compiles contracts it knows where it is and it's names
    const SimpleStorage = await ethers.getContractFactory(
        "SimpleStorage"
    );
    const contract = await SimpleStorage.deploy();
    // it waits for confirmations whereas contract is 
    // deployed or not just like transaction.wait() but better
    await contract.deployed();

};

const verify = async (contractAddress, args) => {
    // after configuring etherscan we got verify command for hardhat
    // running it using command line
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args
        }); 
    } catch (error) {
        console.log(error);
    }
    
};


main().catch((error) => {
    console.error(error);
    process.exit(0);
});