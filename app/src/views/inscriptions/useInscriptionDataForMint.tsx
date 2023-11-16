import { useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useMemo } from "react";
import { getInscriptionDataPda, getInscriptionPda, useFetchSingleAccount } from "@libreplex/shared-ui";

export const useInscriptionDataForRoot = ( mint: PublicKey ) => {
  const { connection } = useConnection();
  const inscriptionDataId = useMemo(() => mint ? getInscriptionDataPda(mint)[0]: undefined, [mint]);
  const q = useFetchSingleAccount(inscriptionDataId, connection, false);
  return q;
};
