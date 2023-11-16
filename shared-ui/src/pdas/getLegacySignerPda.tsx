import { toBufferLE } from "bigint-buffer";
import { PublicKey } from "@solana/web3.js";



export const getLegacySignerPda = (programId: PublicKey, mint: PublicKey) => {
  return mint ? PublicKey.findProgramAddressSync(
    [mint.toBuffer()],
    new PublicKey(programId)
  ) : undefined;
};
