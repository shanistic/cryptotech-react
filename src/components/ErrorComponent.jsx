import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

const ErrorComponent = ({ message }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      bottom={"4"}
      left={"50%"}
      transform={"translateX(-50%)"}
      w={["80%"]}
    >
      <AlertIcon />
      {message}
    </Alert>
  );
};

export default ErrorComponent;