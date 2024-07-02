import { Heading, Text, Button, Center } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MetaData, MyContainer } from "../components";

const NotFoundPage = () => {
  return (
    <MyContainer minH={"40vh"}>
      <MetaData title={`Not Found - 404`} />
      <Center flexDir={"column"} minH={"75vh"}>
        <Heading as="h1" size="2xl" mb={4}>
          404 - Not Found
        </Heading>
        <Text mb={8}>The page you are looking for does not exist.</Text>
        <Button as={RouterLink} to="/" leftIcon={<FaHome />} variant="outline">
          Back to Home
        </Button>
      </Center>
    </MyContainer>
  );
};

export default NotFoundPage;
