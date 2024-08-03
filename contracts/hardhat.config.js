require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-web3");

module.exports = {
  solidity: "0.8.0",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
