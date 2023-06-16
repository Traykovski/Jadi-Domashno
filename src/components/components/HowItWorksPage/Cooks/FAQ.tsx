import { Box, Typography } from "@mui/material";
import React from "react";

export default function FAQ() {
  return (
    <>
      <Box mb={8} mt={15} textAlign={"center"}>
        <Typography
          variant="h5"
          fontFamily={"Bad Script"}
          fontWeight={400}
          fontSize={36}
          className="line"
        >
          Најчесто поставувани прашања
        </Typography>
      </Box>
    </>
  );
}
