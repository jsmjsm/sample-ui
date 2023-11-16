import { Keypair, TransactionInstruction } from "@solana/web3.js";

export interface ITransactionTemplate {
  instructions: TransactionInstruction[];
  signers: Keypair[],
  signatures?: {
    signature: number[],
    pubkey: string
  }[],
  description: string,

  // if undefined, will be provided by the executor prior to signing
  blockhash?: {
    blockhash: string,
    lastValidBlockHeight: number;
  }
}
