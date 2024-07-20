import ResultList from "./components/ResultList";
import SearchInput from "./components/SearchInput";
import useSearch from "./hooks/useApi";
import { Container, Stack, Heading } from "@chakra-ui/react";
function App() {
  const { fetchResults, status, results } = useSearch();

  return (
    <Container h={"100vh"}>
      <Stack pt={100} mb={3} gap={50}>
        <Heading as='h1' size='2xl' textAlign={"center"}>
          Search UI Challenge
        </Heading>
        <SearchInput handleFetchResults={fetchResults} status={status} />
        {status === "RESULT_OK" && <ResultList items={results} />}
      </Stack>
    </Container>
  );
}

export default App;
