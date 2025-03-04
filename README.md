# **MyToken - ERC-20 Deployment on Sepolia Testnet**  
<img width="1432" alt="Screenshot 2025-03-04 alle 10 39 06" src="https://github.com/user-attachments/assets/6b5375be-8fdc-4cd2-b847-088e57c21b9b" />


## **📝 Overview**  
This project demonstrates how to deploy an **ERC-20 token** using Hardhat on the Ethereum **Sepolia testnet**. It uses OpenZeppelin’s ERC-20 implementation and includes a Hardhat script for deployment.  

---

## **📦 Prerequisites**  
Make sure you have the following installed on your system:  
- [Node.js](https://nodejs.org/) (v16+ recommended)  
- [Hardhat](https://hardhat.org/)  
- A wallet (e.g., MetaMask) with Sepolia ETH  
- An **Alchemy** or **Infura** API key for Sepolia  

---

## **🚀 Installation**  

1. **Clone this repository:**  
   ```bash
   git clone https://github.com/your-repo/MyToken.git
   cd MyToken
   ```

2. **Install dependencies:**  
   ```bash
   npm install
   ```

3. **Configure Hardhat**  
   Open `hardhat.config.js` and replace:  
   - `YOUR_ALCHEMY_API_KEY` with your **Alchemy** or **Infura** API key  
   - `YOUR_PRIVATE_KEY` with your **wallet private key** (use environment variables for security)  

   ```javascript
   require("@nomicfoundation/hardhat-toolbox");

   module.exports = {
     solidity: "0.8.20",
     networks: {
       sepolia: {
         url: "https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY",
         accounts: ["YOUR_PRIVATE_KEY"]
       }
     }
   };
   ```

---

## **📝 Smart Contract (ERC-20 Implementation)**  
The `MyToken.sol` contract is based on OpenZeppelin's **ERC-20** standard.  

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }
}
```

---

## **🚀 Deploying the Token on Sepolia**  

1. **Compile the contract:**  
   ```bash
   npx hardhat compile
   ```

2. **Deploy to Sepolia:**  
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

3. **Expected Output:**  
   ```
   📢 Starting deployment...
   ✅ Initial supply set: 1000000000000000000000000
   ⏳ Deploying...
   🎉 Deployment complete!
   📍 MyToken deployed to: 0xYourTokenAddress
   ```

---

## **🔍 Verifying the Deployment**  
After deploying, verify the contract using **Etherscan** (Sepolia version):  
- Go to **[Sepolia Etherscan](https://sepolia.etherscan.io/)**  
- Enter your contract address  
- Check transactions and token balance  

---

## **🎯 Interacting with the Token**  
You can interact with the deployed token using **Hardhat console**:  

```bash
npx hardhat console --network sepolia
```

Inside the console, try:  
```javascript
const token = await ethers.getContractAt("MyToken", "0xYourTokenAddress");
(await token.totalSupply()).toString(); // Check total supply
(await token.symbol()); // Get token symbol
```

---

## **🛠️ Troubleshooting**  

- **Error: `@openzeppelin/contracts not found`**  
  ```bash
  npm install @openzeppelin/contracts
  ```

- **Error: No output on deploy**  
  - Add `console.log()` statements to `deploy.js` for debugging  
  - Use `--verbose` flag:  
    ```bash
    npx hardhat run scripts/deploy.js --network sepolia --verbose
    ```

---

## **📜 License**  
This project is licensed under the **MIT License**.

---

This should help guide you through deploying your ERC-20 token. Let me know if you need any modifications! 🚀
