import { HStack, Button, useBreakpointValue, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headingSize = useBreakpointValue({ base: "sm", md: "md" });
  return (
    <HStack
      p={4}
      shadow="base"
      bgColor="blackAlpha.900"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading size={headingSize} color="white" ml={["2", "10"]}>
        CryptoXplorer
      </Heading>
      <HStack spacing={4} mr={["2", "10"]}>
        <Button variant="unstyled" color="white" _hover={{ color: "#31E1F7" }}>
          <Link to="/">Home</Link>
        </Button>
        <Button variant="unstyled" color="white" _hover={{ color: "#31E1F7" }}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant="unstyled" color="white" _hover={{ color: "#31E1F7" }}>
          <Link to="/coins">Coins</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
