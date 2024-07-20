import { SearchResult } from "../types";
import { Box, HStack, Heading, Badge, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ResultCard = ({ item }: { item: SearchResult }) => {
  const categoryMap = {
    PLAYLISTS: "green",
    BLOG_POSTS: "red",
    VIDEOS: "purple",
  };

  return (
    <Box key={item.id}>
      <HStack>
        <Link href={item.url} target='_blank' isExternal textDecor={"none"}>
          <Heading size='xs' textTransform='uppercase'>
            {item.title}
            <ExternalLinkIcon mx='5px' mb={"3px"} />
          </Heading>
        </Link>
        <Badge marginLeft={"auto"} colorScheme={categoryMap[item.category]}>
          {item.category}
        </Badge>
      </HStack>
      <Text pt='2' fontSize='sm'>
        {item.description}
      </Text>
    </Box>
  );
};

export default ResultCard;
