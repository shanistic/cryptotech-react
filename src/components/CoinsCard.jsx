import { Heading, Image, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CoinsCard = ({
  id,
  name,
  img,
  symbol,
  price,
  currencySymbol = "Rs. ",
}) => {
  return (
    <Link to={`/coins/${id}`}>
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
          {symbol}
        </Heading>
        <Text noOfLines={"1"}>{name}</Text>
        <Text noOfLines={"1"}>
          {price ? `${currencySymbol}${price}` : "NA"}
        </Text>
      </VStack>
    </Link>
  );
};

export default CoinsCard;
