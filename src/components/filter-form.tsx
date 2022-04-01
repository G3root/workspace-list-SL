import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  VisuallyHidden,
} from "@chakra-ui/react";
import * as React from "react";
import { FiSearch } from "react-icons/fi";

export interface FilterFormProps {
  locations: { value: string; id: number }[];
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export function FilterForm({
  locations,
  location,
  setLocation,
  setQuery,
  query,
}: FilterFormProps) {
  return (
    <Box pb="10">
      <SimpleGrid columns={[1, null, 2]} spacing="20px">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<FiSearch color="gray.300" />}
          />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.currentTarget.value);
            }}
            type="search"
            placeholder="workspace name..."
          />
        </InputGroup>

        <FormControl>
          <VisuallyHidden>
            <FormLabel htmlFor="location">Location</FormLabel>
          </VisuallyHidden>
          <Select
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            value={location}
            id="location"
          >
            {locations.map(({ id, value }) => (
              <option key={`location-${id}`} value={value}>
                {value}
              </option>
            ))}
          </Select>
        </FormControl>
      </SimpleGrid>
    </Box>
  );
}
