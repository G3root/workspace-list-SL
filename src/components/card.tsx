import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import type { DataWithoutID } from "../types";

export interface CardProps extends DataWithoutID {}

export function Card({
  name,
  location,
  workConditions,
  costMinimum,
  capacity,
  WiFi,
  powerPortAvailability,
  aircon,
  hours,
}: CardProps) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {name}
        </Box>

        <Text color={"gray.500"}>{workConditions}</Text>

        <Box display="flex" flexDir="column" mt="2">
          <Box as="span" fontSize="sm">
            Cost: {costMinimum}
          </Box>
          <Box as="span" fontSize="sm">
            Location: {location}
          </Box>
          <Box as="span" fontSize="sm">
            Capacity: {capacity}
          </Box>
          <Box as="span" fontSize="sm">
            Air condition: {aircon}
          </Box>
          <Box as="span" fontSize="sm">
            WiFi: {WiFi}
          </Box>
          <Box as="span" fontSize="sm">
            Power port availability: {powerPortAvailability}
          </Box>
          <Box as="span" fontSize="sm">
            Hours: {hours}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
