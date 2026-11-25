## Slide
[Here](https://www.canva.com/design/DAGVOvVE1ow/wTKvuP2OnyLuvr4aAwtM-A/edit)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a local `.env` file from the example and fill in your values:
   ```bash
   cp .env.example .env
   ```
3. Required environment variables:
   - `PRIVATE_KEY`: base58-encoded Solana wallet secret key (mint authority/payer). **Never commit this value.**
   - `PUBLIC_KEY`: recipient wallet public key used by the app.
   - `TOKEN_MINT_ADDRESS`: SPL token mint address.

> Security note: if a secret key was previously committed, treat it as compromised. Rotate/revoke it and remove it from Git history.

## Assignment
1. Complete the functions in `mintTokens.ts` and `burnTokens.ts` to mint and burn tokens.
2. Complete the function in `sendNativeTokens.ts` to send native tokens.
3. Run the server using `npm run start` and test the functionality using the `curl` command.

## Better approach
What can be a better approach to this problem?

## Hints
 - Can you store all incoming events in a DB?
 - Can you think of what is wrong in line 16 of index.ts?
 - How can you ensure you are not double minting tokens?
 - How can you ensure that you're not burning tokens without sending them to the receiver?






 
//   const mint = await createMint(connection, payer, mintAuthority, null, 6);
//   console.log("Mint created at", mint.toBase58());
//   console.log(mint);
  //getting the mint information
  //Tokens when initially created by spl-token have no supply: