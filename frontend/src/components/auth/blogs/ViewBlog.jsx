import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  useColorModeValue,
  Card,
} from "@chakra-ui/react";
import ReactHtmlParser from "html-react-parser";
import CodeHighlighter from "../../common/CodeHighlighter";

const ViewBlog = ({ blog }) => {
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
      p={6}
      bg={useColorModeValue("white", "gray.800")}
      minH="100vh"
    >
      <VStack align="start" spacing={4}>
        {/* Card Section */}
        <Card width="100%" h="25vh" position="relative">
          <VStack w="100%" h="100%" justifyContent="center">
            <Heading as="h2" size="lg" textTransform="uppercase">
              {blog.title}
            </Heading>
            {blog.isPublished && (
              <Badge colorScheme="green" variant="solid">
                Published
              </Badge>
            )}
            <Text fontSize="md">{blog.description}</Text>
          </VStack>
        </Card>

        {/* Blog Content */}
        <Box mt={4} w="100%">
          {ReactHtmlParser(blog.content, { transform })}
        </Box>
      </VStack>

      <VStack mt={4} align="start" spacing={2}>
        {/* Category */}
        <Text fontSize="sm" color="gray.500" textTransform="uppercase">
          {blog.category}
        </Text>

        {/* Created and Updated Dates */}
        <HStack justifyContent="space-between" w="full">
          <Text fontSize="sm" color="gray.500">
            Created at: {new Date(blog.createdAt).toLocaleDateString()}
          </Text>
          <Text fontSize="sm" color="gray.500">
            Updated at: {new Date(blog.updatedAt).toLocaleDateString()}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ViewBlog;
