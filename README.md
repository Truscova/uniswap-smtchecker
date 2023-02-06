# Uniswap-smtchecker

Description:
The bare minimum project uses Solidity 0.8.17 (check hardhat.config.js) and runs SMTChecker on BitMath.sol.
I have not pushed node_modules, hence you will have to follow the steps below


Steps to compile the project:
1. yarn init
2. yarn add --dev hardhat
3. npx hardhat compile


Problem:
If we stop the compiler midway, the solc compiler keeps on running in the background, it never stops. It could be a problem from the hardhat side.


