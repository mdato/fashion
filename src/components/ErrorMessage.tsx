import { VStack, Heading, Button, Text } from "@chakra-ui/react";
import { IErrorMessage } from "@types";
import React from "react";

const ErrorMessage: React.FC<IErrorMessage> = ({ error }) => {
  return (
    <VStack justifyContent="center" alignItems="center" h="50vh">
      <Heading size="xl">Sorry!</Heading>
      <Text>{error}</Text>
      <Text>Please try reloading the page or contact support.</Text>
      <Button
        variant="outline"
        type="button"
        onClick={() => window.location.reload()}
      >
        Reload
      </Button>
    </VStack>
  );
};

export default ErrorMessage;
