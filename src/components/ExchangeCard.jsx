import { Heading, Image, VStack, Text } from "@chakra-ui/react";
import React from "react";

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
    <a href={url} target="blank">
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        m={"4"}
        transition={"all 0.3s"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image
          src={img}
          h={"10"}
          w={"10"}
          objectFit={"contain"}
          alt={"Exchange"}
        />
        <Heading size={"md"} noOfLines={"1"}>
          {rank}
        </Heading>
        <Text noOfLines={"1"}>{name}</Text>
      </VStack>
    </a>
  );
};

export default ExchangeCard;
