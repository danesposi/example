import * as dotenv from "dotenv"
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy"
import "hardhat-deploy-ethers"
import "@nomiclabs/hardhat-ethers";
import "hardhat-contract-sizer";

dotenv.config()

const config: HardhatUserConfig = {
  solidity: {
    version:"0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      accounts: { mnemonic: process.env.MNEMONIC },
      tags: ["test", "local"]
    }
  },
  namedAccounts: {
    deployer: 0
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
    only: [],
  }
  
};

export default config;
