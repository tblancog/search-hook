import { Stack, StackDivider, Text } from "@chakra-ui/react";
import { SearchResult } from "../types";
import ResultCard from "./ResultCard";

type ResultListProps = {
  items: SearchResult[];
};
const ResultList = ({ items }: ResultListProps) => {
  return (
    <Stack divider={<StackDivider />} spacing='4'>
      {items.length > 0 ? (
        items.map((item) => <ResultCard key={item.id} item={item} />)
      ) : (
        <Text textAlign={"center"} fontSize='lg'>
          No results matching your criteria
        </Text>
      )}
    </Stack>
  );
};

export default ResultList;
