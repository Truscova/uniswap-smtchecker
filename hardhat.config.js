/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
     modelChecker: {
      contracts: {
        "contracts/BitMath.sol": ["BitMath"]        
      },    
      divModNoSlacks: true,      
      engine: "chc",      
      invariants: ["contract", "reentrancy"],
      showUnproved: true,      
      solvers: ["z3"],
      targets: ["underflow", "overflow", "assert", "divByZero", "constantCondition", "popEmptyArray", "outOfBounds"],      
      timeout: 200000000
      },
      viaIR: true,
      optimizer: {
           enabled: true,
            details: {
            yul: true
            }
        }
        
    }
  }
};
