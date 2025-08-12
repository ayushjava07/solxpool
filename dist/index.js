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
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const mintTokens_1 = require("./mintTokens");
const app = (0, express_1.default)();
const Txn = {
    description: "DuWJbUHeqDVjTS5f58PKXZ2b7Jr2fveJiqLiuWTSKWRt transferred 1 SOL to DJFq75wb5ku6kodgFX8ynUBJxbH4QGpK7YkPV216f7Ah.",
    events: [],
    fee: 80000,
    feePayer: "DuWJbUHeqDVjTS5f58PKXZ2b7Jr2fveJiqLiuWTSKWRt",
    nativeTransfers: [
        {
            amount: 1000000000,
            fromUserAccount: "DuWJbUHeqDVjTS5f58PKXZ2b7Jr2fveJiqLiuWTSKWRt",
            toUserAccount: "DJFq75wb5ku6kodgFX8ynUBJxbH4QGpK7YkPV216f7Ah",
        },
    ],
    //   signature:  "3to6YR5f3ziJvbGVxnNRobzmiYMNoPiZK8jRvdsugRMirUoiCjMJjEDJs5vdNP8T4qPVR1BFeQqhjtPuuU4JKDg7",
    //   slot: 400645954,
    //   source: "SYSTEM_PROGRAM",
    //   timestamp: 1754997809,
    //   tokenTransfers: [],
    //   transactionError: null,
    //   type: "TRANSFER",
};
app.post("/helius", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fromAddress = Txn.nativeTransfers[0].fromUserAccount;
    const toAddress = Txn.nativeTransfers[0].toUserAccount;
    const amount = Txn.nativeTransfers[0].amount;
    const type = "received_native_sol";
    if (type === "received_native_sol") {
        yield (0, mintTokens_1.mintTokens)(fromAddress, toAddress, amount);
    }
    else {
        // What could go wrong here?
        yield (0, mintTokens_1.burnTokens)(fromAddress, toAddress, amount);
        yield (0, mintTokens_1.sendNativeTokens)(fromAddress, toAddress, amount);
    }
    res.send("Transaction successful");
}));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
