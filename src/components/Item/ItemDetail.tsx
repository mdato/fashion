import { Box, Link, Text, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import useItemDetails from "api/hooks/useItemDetails";
import ErrorMessage from "components/ErrorMessage";
//import React from "react";
import { useParams } from "react-router-dom";
import Header from "components/Header";
import Loader from "components/Loader";
import ItemVariant from "./ItemVariant";

const spacing = {
  base: "center",
  xl: "flex-start",
};

const ItemDetail = () => {
  const params: { id: string } = useParams();
  const { id } = params;
  const { data: item, isError, isLoading, error } = useItemDetails(id);
  console.log(item);
  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage error={error.message} />;
  return (
    <>
      <Header>
        <Box width="15rem">
          <Link
            as={ReactRouterLink}
            to="/items"
            sx={{
              textDecoration: "none",
              fontSize: "inherit",
              fontWeight: "medium",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ChevronLeftIcon sx={{ mr: 2 }} />
            Back to Marketplace
          </Link>
        </Box>
      </Header>
      <Flex justifyContent="center">
        <Box
          width={{ base: "container.sm", lg: "84rem" }}
          p={4}
          mt={8}
          minH="90vh"
          as="section"
        >
          <Flex
            w="100%"
            height="auto"
            direction={{ base: "column", lg: "row" }}
            justifyContent="space-evenly"
          >
            <Flex justifyContent={spacing}>
              <img
                src={item?.imageUrls[0].url}
                alt={item?.name}
                style={{ maxHeight: 350, margin: "0 2rem" }}
              />
            </Flex>
            <Flex
              maxWidth="container.sm"
              flexDirection="column"
              mt={{ base: 8, lg: 0 }}
            >
              <Heading size="lg">{item?.name}</Heading>
              <Text>{item?.description}</Text>
              <SimpleGrid columns={[null, 1, 2]} mt={4}>
                {item?.variants.map((variant, idx) => (
                  <ItemVariant key={idx} {...variant} />
                ))}
              </SimpleGrid>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default ItemDetail;
