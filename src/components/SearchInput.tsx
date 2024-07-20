import { useRef, KeyboardEvent } from "react";
import { Button, Input } from "@chakra-ui/react";
import { Status } from "../types";
type SearchInputProps = {
  handleFetchResults: (query: string) => Promise<void>;
  status: Status;
};

const SearchInput = ({ handleFetchResults, status }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (!inputRef.current) return;

    const value = inputRef.current.value;
    if (value.trim() === "" || value.length < 3) return;
    handleFetchResults(value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <Input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        mt={0}
        size='lg'
        placeholder='Search...'
      />
      <Button
        colorScheme='teal'
        isLoading={status === "LOADING"}
        loadingText='Searching'
        onClick={handleSearch}
      >
        Search
      </Button>
    </>
  );
};

export default SearchInput;
