const hre = require("hardhat");

async function main() {
  const signers = await hre.conflux.getSigners();
  const defaultAccount = signers[0];

  const contractAddress = "YOUR_CONTRACT_ADDRESS";
  const recipientAddress = "RECIPIENT_WALLET_ADDRESS";
  const tokenID = 1; // Example token ID
  const amount = 10; // Number of tokens to mint
  const data = "0x00"; // Data field for additional information (if necessary)

  const ConfluxERC1155NFT = await hre.conflux.getContractAt(
    "ConfluxERC1155NFT",
    contractAddress
  );

  const receipt = await ConfluxERC1155NFT.mint(
    recipientAddress,
    tokenID,
    amount,
    data
  )
    .sendTransaction({
      from: defaultAccount.address,
    })
    .executed();

  console.log(
    `Minted ${amount} of token ${tokenID} to ${recipientAddress}: Transaction Hash: ${receipt.transactionHash}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
