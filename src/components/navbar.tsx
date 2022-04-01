import {
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  useColorMode,
  Text,
  Heading,
} from "@chakra-ui/react";
import * as React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FiMoon, FiSun);
  return (
    <Flex
      as="header"
      w="100%"
      h="100%"
      align="center"
      justify="space-between"
      my="10"
    >
      <Box>
        <Heading as="h4" size="md">
          Work Spaces List
        </Heading>
      </Box>
      <Box>
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          variant="outline"
          color="current"
          ml={{ base: "0", md: "3" }}
          onClick={toggleMode}
          icon={<SwitchIcon />}
        />
      </Box>
    </Flex>
  );
}
