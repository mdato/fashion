import { useQuery } from "react-query";
import { getItemById } from "../services/itemServices";
import queryKeys from "api/react-query/queryKeys";
import { useToast } from "@chakra-ui/react";
import { IItem } from "@types";

export default (id: string) => {
  const toast = useToast();
  return useQuery<IItem, Error>({
    queryKey: queryKeys.ITEM,
    queryFn: () => getItemById(id),
    onError: (error) => {
      toast({
        description: error,
        variant: "solid",
        status: "error",
        isClosable: true,
        duration: 4000,
      });
    },
    retry: 3,
  });
};
