import {
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { useColorMode } from "../components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={6}>
      <Flex
        height="20"
        align="center"
        direction={{ sm: "row" }}
        justify="space-between"
      >
        <Text
          textStyle={{ base: "xl", sm: "2xl" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          bgGradient="to-r"
          gradientFrom="cyan.400"
          gradientTo="blue.500"
          bgClip="text"
        >
          <Link to="/">Product Store 🛒</Link>
        </Text>
        <Spacer />
        <HStack align={"center"}>
          <Link to="/create">
            <Button variant={"subtle"} size={"sm"}>
              <Icon size={"lg"}>
                <CiSquarePlus />
              </Icon>
            </Button>
          </Link>
          <Button onClick={toggleColorMode} variant={"subtle"} size={"sm"}>
            {colorMode === "dark" ? <LuMoon /> : <LuSun />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
