const hre = require("hardhat");

async function main() {
  console.log("📢 Avvio deploy..."); // Debug

  const initialSupply = hre.ethers.parseUnits("1000000", 18);
  console.log("✅ Initial supply impostato:", initialSupply.toString()); // Debug

  const MyToken = await hre.ethers.deployContract("MyToken", [initialSupply]);
  console.log("⏳ Deploy in corso..."); // Debug

  await MyToken.waitForDeployment();
  console.log("🎉 Deploy completato!");

  console.log(`📍 MyToken deployato su: ${MyToken.target}`);
}

main().catch((error) => {
  console.error("❌ Errore durante il deploy:", error);
  process.exitCode = 1;
});
