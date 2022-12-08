const { ethers } = require("hardhat");


async function main() {
    const SpookyComplexRewarderHandlerV2 = await ethers.getContractFactory("SpookyComplexRewarderHandlerV2");
    const spookyComplexRewarderHandlerV2 = await SpookyComplexRewarderHandlerV2.deploy();
    await spookyComplexRewarderHandlerV2.deployed();
    console.log("SpookyComplexRewarderHandlerV2 deployed to: ", spookyComplexRewarderHandlerV2.address);

    await hre.run("verify:verify", {
        address: spookyComplexRewarderHandlerV2.address
      })
}
main();