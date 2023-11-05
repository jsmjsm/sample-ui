

import * as anchor from "@coral-xyz/anchor";
import { PublicKey, Connection, Keypair } from "@solana/web3.js";

export const PROGRAM_ID_METADATA =
  "LibrQsXf9V1DmTtJLkEghoaF1kjJcAzWiEGoJn8mz7p";
export const PROGRAM_ID_INSCRIPTIONS =
  "inscokhJarcjaEs59QbQ7hYjrKz25LEPRfCbP8EmdUp";
  

import { IDL} from "../libreplex_legacy";
import {LibreplexLegacy} from "../libreplex_legacy";
import { Wallet, WalletContextState } from "@solana/wallet-adapter-react";

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export function getProgramInstanceLegacyInscriptions(
  programId: PublicKey,
  connection: Connection,
  wallet: Pick<WalletContextState, 'publicKey' |'signAllTransactions'|'signTransaction'>
) {

  if (
    !wallet.publicKey ||
    !wallet.signAllTransactions ||
    !wallet.signTransaction
  ) {
    throw Error("Wallet not ready");
  }
  

  const nodeWallet = {
    signTransaction: wallet.signTransaction!,
    signAllTransactions: wallet.signAllTransactions!,
    publicKey: wallet.publicKey!,
  };


  const provider = new anchor.AnchorProvider(
    connection,
    nodeWallet,
    anchor.AnchorProvider.defaultOptions()
  );
  const idl = IDL;
  const program = new anchor.Program<LibreplexLegacy>(idl, programId, provider)!;
  return program;
}
