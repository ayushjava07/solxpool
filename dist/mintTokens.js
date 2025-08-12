"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNativeTokens = exports.burnTokens = exports.mintTokens = void 0;
// Creating a new Token Mint
// Creating Token Accounts
// Minting
// Transferring tokens from one holder to another
const bs58_1 = __importDefault(require("bs58"));
const spl_token_1 = require("@solana/spl-token");
const web3_js_1 = require("@solana/web3.js");
const address_1 = require("./address");
const payer = web3_js_1.Keypair.fromSecretKey(bs58_1.default.decode(address_1.PRIVATE_KEY));
const mintAuthority = payer.publicKey;
const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)("devnet"));
const mintTokens = (fromAddress, toAddress, amount) => __awaiter(void 0, void 0, void 0, function* () {
    let toAddressBs58 = new web3_js_1.PublicKey(address_1.PUBLIC_KEY);
    //   toAddressBs58 = new Uint8Array(toAddressBs58);
    //   const toPubkey = new PublicKey(toAddressBs58);
    let mintAddress = new web3_js_1.PublicKey(address_1.TOKEN_MINT_ADDRESS);
    //   mintAddress = new Uint8Array(mintAddress);
    //   const mintPubkey = new PublicKey(mintAddress);
    // Optional: get or create the recipient's associated token account
    const toTokenAccount = yield (0, spl_token_1.getOrCreateAssociatedTokenAccount)(connection, payer, mintAddress, toAddressBs58);
    const mint = yield (0, spl_token_1.mintTo)(connection, payer, mintAddress, toTokenAccount.address, payer, amount);
    console.log(2);
    console.log(mintAddress);
    console.log(toAddressBs58);
    console.log(mint);
});
exports.mintTokens = mintTokens;
const burnTokens = (fromAddress, toAddress, amount) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Burning tokens");
});
exports.burnTokens = burnTokens;
const sendNativeTokens = (fromAddress, toAddress, amount) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Sending native tokens");
});
exports.sendNativeTokens = sendNativeTokens;
