"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import { Tools } from "../components/tools/Tools";

const DemoPage = () => {
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      sx={{
        alignItems: "center",
      }}
    >
      <Tools />
    </Box>
  );
};

export default DemoPage;
