import { Skeleton, SimpleGrid } from "@chakra-ui/react";
import Header from "components/Header";
//import React from "react";
import { numCols, cardDimensions } from "./constants";

const ItemCardSkeleton = () => {
  return (
    <>
      <Header />
      <SimpleGrid
        columns={numCols}
        spacing="20px"
        alignItems="center"
        justifyItems="center"
        mb={8}
      >
        {Array.from({ length: 20 }, (v, i) => i).map((val) => (
          <Skeleton sx={{ ...cardDimensions }} key={val}>
            ItemCardSkeleton
          </Skeleton>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ItemCardSkeleton;
