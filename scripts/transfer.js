const { ethers } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();
  const token = await ethers.getContractAt(
    "MyToken",
    "0x149F465884228C29cBf3B387692038252801A71E"
  );

  await token.transfer(
    "0x6b42f17315489bc4eca5cb55385f997cb8471599",
    ethers.utils.parseUnits("100", 18)
  );
  console.log("✅ 100 CDT inviati!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
