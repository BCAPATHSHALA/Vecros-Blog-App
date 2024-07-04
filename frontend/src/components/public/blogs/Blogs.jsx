import { Box, Center, Heading } from "@chakra-ui/react";
import PublicBlogsList from "./PublicBlogsList";

const Blogs = () => {
  return (
    <Box>
      <Center
        bg={"#e5e5e5"}
        color={"#232323"}
        fontFamily={"Nunito"}
        p={10}
        borderRadius={10}
      >
        <Heading
          textAlign={"center"}
          fontSize={{ base: "1.5rem", md: "3rem", lg: "4rem" }}
          textTransform={"uppercase"}
        >
          Read Learn Grow
        </Heading>
      </Center>
      <PublicBlogsList />
    </Box>
  );
};

export default Blogs;
