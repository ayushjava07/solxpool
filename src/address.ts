import dotenv from "dotenv";

dotenv.config();

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const PRIVATE_KEY = requireEnv("PRIVATE_KEY");
export const PUBLIC_KEY = requireEnv("PUBLIC_KEY");
export const TOKEN_MINT_ADDRESS = requireEnv("TOKEN_MINT_ADDRESS");