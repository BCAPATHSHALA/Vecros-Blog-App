import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Center minH={"75vh"}>
      <VStack>
        <Heading fontSize={{ base: "2rem", md: "3rem", lg: "4rem" }}>
          Vecros Blog Applcation
        </Heading>
        <Text fontSize={{ base: "0.9rem", md: "1.2rem", lg: "1.6rem" }}>
          Create Your Blog & Share Your Skills
        </Text>
        <Link to={"/blogs"}>
          <Button colorScheme="purple">Read Bolgs</Button>
        </Link>
      </VStack>
    </Center>
  );
};

export default Home;
