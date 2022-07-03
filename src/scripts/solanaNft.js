const { Metaplex, keypairIdentity } = require("@metaplex-foundation/js");
const {
  Connection,
  clusterApiUrl,
  Keypair,
  PublicKey,
} = require("@solana/web3.js");
const connection = new Connection(
  "https://solana-api.projectserum.com", //Solana RPC url
  "confirmed"
);
const metaplex = new Metaplex(connection);
const candyMachineId = new PublicKey(
  "9MynErYQ5Qi6obp4YwwdoDmXkZ1hYVtPUqYmJJ3rZ9Kn" //candyMachineId of NFT collection (Degods)
);
(async () => {
  const allNFTLists = await metaplex
    .nfts()
    .findAllByCandyMachine(candyMachineId, 1);

  //Assignment Part 1:
  //Total NFTs of the collection (degods)
  console.log("Total listed NFT's of DeGods: ", allNFTLists.length);

  const txns = await connection.getSignaturesForAddress(
    candyMachineId,
    "confirmed"
  );
  getTransactionDetailsFromSignature(txns);
})();

//Assignment Part 2:
const getTransactionDetailsFromSignature = async (nftsmetadata) => {
  console.log(
    "\nList of NFT's(their token ids) transacted in last 30 mins: \n"
  );
  for (const sign of nftsmetadata) {
    const txn = await connection.getTransaction(sign.signature, "confirmed");

    //List of NFTs transfered in Last 30 min
    console.log(JSON.stringify(txn.transaction.message.accountKeys[14]));
    const currentTimeInSec = new Date().getSeconds();
    if (currentTimeInSec - sign.blockTime > 1800) break;
  }
};
