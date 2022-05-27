import { SimpleGrid } from "@chakra-ui/react";
import useItems from "api/hooks/useItems";
import ErrorMessage from "components/ErrorMessage";
import Header from "components/Header";
import React from "react";
import { ItemCard } from "./ItemCard";
import ItemCardSkeleton from "./ItemCardSkeleton";
import { numCols } from "./constants";

export const ItemList: React.FC = () => {
  const { data: items, isLoading, isError, error } = useItems();
  if (isLoading) return <ItemCardSkeleton />;
  if (isError) return <ErrorMessage error={error.message} />;
  return (
    <>
      <Header />
      <SimpleGrid
        columns={numCols}
        spacingY="20px"
        alignItems="center"
        justifyItems="center"
        mb={8}
      >
        {items?.map((item, idx) => (
          <ItemCard item={item} key={item.id + idx} />
        ))}
      </SimpleGrid>
    </>
  );
};
