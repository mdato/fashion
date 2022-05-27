import { Button, Heading, VStack } from "@chakra-ui/react";
//import React from "react";
import { useHistory } from "react-router-dom";

const NotFound404 = () => {
  const router = useHistory();

  return (
    <VStack height="100vh" justifyContent="center" alignItems="center">
      <Heading size="3xl">404 Page Not Found</Heading>
      <Button type="button" onClick={() => router.push("/items")}>
        Go Home
      </Button>
    </VStack>
  );
};

export default NotFound404;
