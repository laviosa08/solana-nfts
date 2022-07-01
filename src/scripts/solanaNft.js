const solanaWeb3 = require('@solana/web3.js');
const { clusterApiUrl, Connection } =  require("@solana/web3.js");

//solana rpc
const rpc = "http://192.168.1.88:8899";

const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");