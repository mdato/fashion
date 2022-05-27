import React from "react";
import { IVariant } from "@types";
import { Text, Flex, Box } from "@chakra-ui/react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const ItemVariant: React.FC<IVariant> = ({ name, description, price }) => {
  return (
    <Flex
      sx={{
        height: 235,
        maxWidth: 275,
        m: 2,
        p: 5,
        border: "1px solid grey",
        borderRadius: 2,
        boxShadow: "md",
      }}
      flexDirection="column"
    >
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          {name}
        </Text>
      </Box>
      <Box sx={{ my: 1, h: 125 }}>
        <Text fontSize="sm">{description}</Text>
      </Box>
      <Box>
        <Text fontSize="xl" color="green.400" fontWeight="bold">
          {formatter.format(price)}
        </Text>
      </Box>
    </Flex>
  );
};

export default ItemVariant;
