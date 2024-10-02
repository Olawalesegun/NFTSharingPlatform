require("dotenv").config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const LISK_SEPOLIA_URL = process.env.LISK_SEPOLIA_URL || "";

const KEY = process.env.LISK_PRIVATE_KEY || "";

const AMOY_POLYGON_URL = process.env.AMOY_POLYGON_URL;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    'lisk-sepolia': {
      url: LISK_SEPOLIA_URL || "",
      accounts: [`0x${KEY}`],
      gasPrice: 1000000000,
    },
    // mumbai: {
    //   url: AMOY_POLYGON_URL,
    //   accounts: [`0x${KEY}`],
    // },
  },
  etherscan: {
    apiKey: process.env.LISK_PRIVATE_KEY,
    // apiKey: {
    //   polygonMumbai: `${process.env.POLYGONSCAN_API_KEY}`,
    // },
    customChains: [
      {
          network: "lisk-sepolia",
          chainId: 4202,
          urls: {
              apiURL: "https://sepolia-blockscout.lisk.com/api",
              browserURL: "https://sepolia-blockscout.lisk.com"
          }
      }
    ]
  },
  sourcify: {
    enabled: false
  },
  
};

export default config;
