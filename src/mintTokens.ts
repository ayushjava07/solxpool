// Creating a new Token Mint
// Creating Token Accounts
// Minting
// Transferring tokens from one holder to another
import bs58 from "bs58";
import {
  createMint,
  getAccount,
  getMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
} from "@solana/spl-token";
import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";
import { PRIVATE_KEY, PUBLIC_KEY, TOKEN_MINT_ADDRESS } from "./address";
const payer = Keypair.fromSecretKey(bs58.decode(PRIVATE_KEY));
const mintAuthority = payer.publicKey;
const connection = new Connection(clusterApiUrl("devnet"));
export const mintTokens = async (
  fromAddress: string,
  toAddress: string,
  amount: number
) => {
  let toAddressBs58 = new PublicKey(PUBLIC_KEY);
  //   toAddressBs58 = new Uint8Array(toAddressBs58);
  //   const toPubkey = new PublicKey(toAddressBs58);
  let mintAddress = new PublicKey(TOKEN_MINT_ADDRESS);
  //   mintAddress = new Uint8Array(mintAddress);
  //   const mintPubkey = new PublicKey(mintAddress);
  // Optional: get or create the recipient's associated token account
  const toTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    payer,
    mintAddress,
    toAddressBs58
  );
  const mint = await mintTo(
    connection,
    payer,
    mintAddress,
    toTokenAccount.address,
    payer,
    amount
  );
  console.log(2);
  console.log(mintAddress);
  console.log(toAddressBs58);
  console.log(mint);
  const mintInfo = await getMint(connection, mintAddress);

  console.log(mintInfo.supply);
  // 100

  const tokenAccountInfo = await getAccount(connection, toTokenAccount.address);

  console.log(tokenAccountInfo.amount);
  // 100
};

export const burnTokens = async (
  fromAddress: string,
  toAddress: string,
  amount: number
) => {
  console.log("Burning tokens");
};

export const sendNativeTokens = async (
  fromAddress: string,
  toAddress: string,
  amount: number
) => {
  console.log("Sending native tokens");
};
