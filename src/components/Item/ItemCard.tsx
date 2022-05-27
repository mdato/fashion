import { VStack, Box, Button, Text } from "@chakra-ui/react";
import { IItem } from "@types";
import React from "react";
import { useHistory } from "react-router-dom";
import { cardDimensions } from "./constants";

export const ItemCard: React.FC<{ item: IItem }> = ({ item }) => {
  const history = useHistory();
  return (
    <VStack>
      <Box
        sx={{
          ...cardDimensions,
          backgroundImage: `url(${item.imageUrls[0].url})`,
          "&:hover": {
            "> div": {
              opacity: 0.95,
              transition: "all 0.2s",
            },
          },
        }}
      >
        <Box
          sx={{
            opacity: 0,
            backgroundColor: "blue.700",
          }}
          p={4}
          h="100%"
          w="100%"
          borderRadius={7}
        >
          <Box h={165}>
            <Text fontSize="large" fontWeight="medium">
              {item.name}
            </Text>
            {item.variants.slice(0, 4).map((variant, idx) => (
              <Text fontSize="sm" key={idx}>
                Item {idx + 1} - {variant.name}
              </Text>
            ))}
            {item.variants.length > 4 && (
              <Text fontSize="sm">
                ... plus {item.variants.length - 4} more
              </Text>
            )}
          </Box>
          <Button
            bottom={0}
            width="100%"
            onClick={() => history.push(`/items/${item.id}`)}
            colorScheme="green"
          >
            SELECT
          </Button>
        </Box>
      </Box>
      <Text textAlign="center" fontWeight="bold">
        {item.name}
      </Text>
    </VStack>
  );
};
