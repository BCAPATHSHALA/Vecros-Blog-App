import { Box, Center, Heading } from "@chakra-ui/react";
import PublicBlogsList from "./PublicBlogsList";

const Blogs = () => {
  return (
    <Box>
      <Center bg={"gray.600"} p={5} borderRadius={10}>
        <Heading>Gain Your Knowledge</Heading>
      </Center>
      <PublicBlogsList />
    </Box>
  );
};

export default Blogs;
