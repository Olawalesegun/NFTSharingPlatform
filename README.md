# MetaWeb Social Media Platform

## Introduction

MetaWeb Social Media Platform is a decentralized social media platform built on the Ethereum blockchain. It allows users to create and share content in the form of NFTs representing multimedia assets such as images, videos, and audio clips. The platform incorporates advanced features such as user authentication, role-based access control (RBAC), and content moderation.

## Contracts Overview

### 1. MetaWebNFT

- **Contract Address**: [0x388Fab8741443931259B903b4D984af20Bff7379](https://sepolia-blockscout.lisk.com/address/0x388Fab8741443931259B903b4D984af20Bff7379)
- **Description**: This contract is responsible for managing the creation and ownership of non-fungible tokens (NFTs) representing multimedia assets.
- **Features**:
  - ERC721 compliant.
  - Supports minting NFTs with associated metadata.
  - Extends ERC721URIStorage for storing metadata URIs.

### 2. MetaWebFactory

- **Contract Address**: [0x4b8D41285c69BE738939214AC892c60646312C7d](https://sepolia-blockscout.lisk.com/address/0x4b8D41285c69BE738939214AC892c60646312C7d)
- **Description**: The factory contract for creating NFTs on the MetaWeb platform.
- **Features**:
  - Allows users to create NFTs through the factory contract.
  - Integrates with MetaWebNFT contract for NFT creation.
  - Emits events for tracking newly created NFTs.

### 3. MetaWebX

- **Contract Address**: [0xb7407d3DE57702a8cba63c2ee61eade44679EE73](https://sepolia-blockscout.lisk.com/address/0xb7407d3DE57702a8cba63c2ee61eade44679EE73)
- **Description**: The main contract for MetaWeb Social Media Platform, handling user registration, content creation, group management, and interactions.
- **Features**:
  - User registration with usernames.
  - Group creation and ownership transfer functionality.
  - NFT creation and interaction features (liking, commenting).
  - Role-based access control (Admin, Moderator, User).

## Usage

You can interact with these contracts using various Ethereum wallets or through decentralized applications (DApps) that support smart contract interactions.

To interact with the MetaWebX contract, you can:

1. Register as a user using the `registerUser` function.
2. Create groups using the `createGroup` function.
3. Create NFTs using the `createNFT` function.
4. Like NFTs using the `likeNFT` function.
5. Add comments to NFTs using the `addComment` function.
6. Transfer group ownership using the `transferGroupOwnership` function.
7. Grant roles to users using the `grantUserRole` function.

## Deployment

These contracts have been deployed to the Ethereum blockchain:

- **MetaWebNFT**:  [0x388Fab8741443931259B903b4D984af20Bff7379](https://sepolia-blockscout.lisk.com/address/0x388Fab8741443931259B903b4D984af20Bff7379)
- **MetaWebFactory**: [0x4b8D41285c69BE738939214AC892c60646312C7d](https://sepolia-blockscout.lisk.com/address/0x4b8D41285c69BE738939214AC892c60646312C7d)
- **MetaWebX**: [0xb7407d3DE57702a8cba63c2ee61eade44679EE73](https://sepolia-blockscout.lisk.com/address/0xb7407d3DE57702a8cba63c2ee61eade44679EE73)

## License

This project is licensed under the [MIT License](LICENSE).
