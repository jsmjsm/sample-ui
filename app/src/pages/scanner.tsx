"use client";

import { Box } from "@chakra-ui/react";

import { MetadataProgramProvider } from "@libreplex/shared-ui";
import React from "react";
import { LibreScanner } from "../components/demo/Scanner";

const DemoPage = () => {
  return (
    <Box
      w={"100vw"}
      h={"100%"}
      display={"flex"}
      flexDirection={"column"}
      sx={{
        alignItems: "center",
      }}
    >
      <MetadataProgramProvider>
        <LibreScanner />
      </MetadataProgramProvider>
    </Box>
  );
};

export default DemoPage;
