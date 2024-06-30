import { Container as ChakraContainer } from "@chakra-ui/react";

function MyContainer({ children, ...rest }) {
  return (
    <ChakraContainer
      maxW={{ base: "100%", md: "7xl" }}
      mx="auto"
      px={4}
      {...rest}
    >
      {children}
    </ChakraContainer>
  );
}

export default MyContainer;
