import { Box, Spinner } from "@chakra-ui/react";
//import React from "react";

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      w="100vw"
    >
      <Spinner size="xl" />
    </Box>
  );
};

export default Loader;
