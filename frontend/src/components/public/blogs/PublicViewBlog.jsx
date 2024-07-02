import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Card,
} from "@chakra-ui/react";
import ReactHtmlParser from "html-react-parser";
import CodeHighlighter from "../../common/CodeHighlighter";
import MyContainer from "../../Container/MyContainer";
import { useLocation } from "react-router-dom";

const PublicViewBlog = () => {
  const location = useLocation();
  const { blog } = location.state;

  const transform = (node, index) => {
    if (node.type === "pre" && node.props.className === "ql-syntax") {
      return <CodeHighlighter key={index}>{node}</CodeHighlighter>;
    }
    return node;
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      maxW="full"
      borderRadius="lg"
      boxShadow="md"
      p={{ base: 5, md: 6 }}
      bg={useColorModeValue("white", "gray.800")}
      minH="100vh"
    >
      <VStack align="start" spacing={4}>
        <Card
          width="100%"
          h={{ base: "20vh", md: "25vh" }}
          position="relative"
          p={5}
        >
          <VStack w="100%" h="100%" justifyContent="center">
            <Heading
              as="h3"
              fontSize={{ base: "1.35rem", md: "1.5rem" }}
              textTransform="capitalize"
            >
              {blog.title}
            </Heading>
            <Text
              textAlign={"center"}
              color={"gray"}
              fontSize={{ base: "sm", md: "md" }}
            >
              {blog.description}
            </Text>
          </VStack>
        </Card>

        <MyContainer bg={"gray.900"} p={5} borderRadius={"10"}>
          {ReactHtmlParser(blog.content, { transform })}
        </MyContainer>
      </VStack>

      <VStack mt={4} align="start" spacing={2}>
        <HStack justifyContent="space-between" w="full">
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
            Created at: {new Date(blog.createdAt).toLocaleDateString()}
          </Text>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            color="gray.500"
            textTransform="uppercase"
          >
            {blog.category}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default PublicViewBlog;
