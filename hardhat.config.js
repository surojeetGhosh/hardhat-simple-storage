require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    ganache: {
      url: process.env.RPC_URL,
      account: [
        process.env.PRIVATE_KEY
      ],
      chainId: 1337
    }
  },
  etherscan: {
    apiKey: process.env.API
  },
  solidity: "0.8.17",
  gasReporter: {
    enabled: true,
    outputFile: "gas-reporter.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: process.env.COIN_API
  }
};
