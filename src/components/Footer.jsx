import React from "react";
import { Box, Stack, VStack, Text, Link, Icon, Avatar } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      w={"full"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]} spacing={4}>
          <Text fontWeight={"bold"} fontSize="xl">
            About Us
          </Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Welcome to our web app, your comprehensive gateway to the world of
            cryptocurrencies! Here, you'll find a treasure trove of information
            on various crypto exchanges and detailed insights into every digital
            coin in existence.Navigate through our platform to discover
            up-to-date data on the latest crypto exchanges, including trading
            volumes, fees, and supported currencies. Whether you're a seasoned
            trader or a curious newcomer, our user-friendly interface ensures
            you stay informed and empowered in the dynamic realm of digital
            assets.
          </Text>
        </VStack>

        <VStack alignItems="center" spacing={4}>
          <Avatar
            boxSize={"12"}
            src="https://avatars.githubusercontent.com/u/133004578?v=4"
            alt="Avatar"
          />
          <Text fontSize="sm" textAlign={"center"}>
            Muhammad Usman
          </Text>
          <Stack direction="row" spacing={2}>
            <Link
              href="https://github.com/shanistic"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ color: "#31E1F7" }}
            >
              <Icon as={FaGithub} boxSize={6} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-usman-940b2a274"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ color: "#31E1F7" }}
            >
              <Icon as={FaLinkedin} boxSize={6} />
            </Link>
            <Link
              href="https://www.instagram.com/__shanistic__?igsh=bnBzZHA3bWY5eTBp"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ color: "#31E1F7" }}
            >
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
          </Stack>
        </VStack>
      </Stack>
    </Box>

    // <Box
    //   bgColor={"blackAlpha.900"}
    //   color={"whiteAlpha.700"}
    //   w={"full"}
    //   minH={"48"}
    //   px={"16"}
    //   py={["16", "8"]}
    // >
    //   <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
    //     <VStack w={"full"} alignItems={["center", "flex-start"]}>
    //       <Text fontWeight={"bold"}>About Us</Text>
    //       <Text
    //         fontSize={"sm"}
    //         letterSpacing={"widest"}
    //         textAlign={["center", "left"]}
    //       >
    //         We are the best crypto traders who ensure the best trading services
    //         for you in affordable prices.
    //       </Text>
    //     </VStack>

    //     <VStack>
    //       <Avatar
    //         boxSize={"28"}
    //         mt={["4", "0"]}
    //         src="https://avatars.githubusercontent.com/u/133004578?v=4"
    //       />
    //       <Text>
    //         <a href="https://github.com/shanistic" target="blank">
    //           Muhammad Usman
    //         </a>
    //       </Text>
    //     </VStack>
    //   </Stack>
    // </Box>
  );
};

export default Footer;
