import hre from "hardhat";
import { ethers } from "hardhat";

async function main() {
  const ibAlluoUSD = "0xC2DbaAEA2EfA47EBda3E572aa0e55B742E408BF6";
  const ibAlluoETH = "0xc677B0918a96ad258A68785C2a3955428DeA7e50";

  // const VideoContract = await hre.ethers.getContractFactory("VideoContract");
  // const videoContract = await VideoContract.deploy();
  // await videoContract.deployed();

  const StreamContract = await hre.ethers.getContractFactory("StreamContract");
  const streamContract = await StreamContract.deploy(ibAlluoUSD, ibAlluoETH);
  await streamContract.deployed();

  // console.log("VideoContract deployed to:", videoContract.address);
  console.log("StreamContract deployed to:", streamContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
