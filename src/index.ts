require("dotenv").config();
import express from "express";
import { burnTokens, mintTokens, sendNativeTokens } from "./mintTokens";

const app = express();
const Txn = {
  description:
    "DuWJbUHeqDVjTS5f58PKXZ2b7Jr2fveJiqLiuWTSKWRt transferred 1 SOL to DJFq75wb5ku6kodgFX8ynUBJxbH4QGpK7YkPV216f7Ah.",
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
app.post("/helius", async (req, res) => {
  const fromAddress = Txn.nativeTransfers[0].fromUserAccount;
  const toAddress = Txn.nativeTransfers[0].toUserAccount;
  const amount =Txn.nativeTransfers[0].amount;
  const type = "received_native_sol";

  if (type === "received_native_sol") {
    await mintTokens(fromAddress, toAddress, amount);
  } else {
    // What could go wrong here?
    await burnTokens(fromAddress, toAddress, amount);
    await sendNativeTokens(fromAddress, toAddress, amount);
  }

  res.send("Transaction successful");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
