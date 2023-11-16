import { PublicKey } from "@solana/web3.js";
import React from "react";
import { useInscriptionDataForRoot, useInscriptionForRoot } from "../../sdk";
import { Badge } from "@chakra-ui/react";
import { useFormattedNumber } from "../../utils/useFormattedNumber";
import { SolscanLink } from "../SolscanLink";
import { useCluster } from "../../contexts";
export const InscriptionStats = ({ root }: { root: PublicKey }) => {
  const { data: inscriptionData } = useInscriptionDataForRoot(root);

  const { cluster } = useCluster();

  const {
    inscription: { data: inscription, refetch, isFetching },
  } = useInscriptionForRoot(root);

  const formattedSize = useFormattedNumber(inscription?.item?.size ?? 0, 0);

  return inscription?.item ? (
    <div
      style={{ zIndex: 100, right: "8px", top: "8px", display :"flex", flexDirection :"column", alignItems: "end", gap: '4px', position :"absolute" }}
    >
      <Badge
        sx={{
          border: "1px solid #aaa",
          background: "#333",
        }}
      >
        #{inscription.item.order.toNumber().toLocaleString()}
      </Badge>
      <Badge
        sx={{
          border: "1px solid #aaa",
          background: "#333",
        }}
      >
        Size: {formattedSize}B
      </Badge>
      <Badge
        sx={{
          border: "1px solid #aaa",
          background: "#333",
        }}
      >
        Rent:{" "}
        {(
          Math.round(
            (0.00089088 + 0.00000696 * inscription?.item?.size) * 100
          ) / 100
        ).toFixed(2)}{" "}
        SOL
      </Badge>
      <SolscanLink
        address={inscriptionData.pubkey.toBase58()}
        cluster={cluster}
      />
    </div>
  ) : (
    <></>
  );
};
