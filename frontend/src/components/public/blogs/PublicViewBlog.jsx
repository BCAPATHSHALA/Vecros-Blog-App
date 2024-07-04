import {
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Card,
  Badge,
} from "@chakra-ui/react";
import ReactHtmlParser from "html-react-parser";
import CodeHighlighter from "../../common/CodeHighlighter";
import MyContainer from "../../Container/MyContainer";
import { useLocation } from "react-router-dom";
import MetaData from "../../common/MetaData";

const PublicViewBlog = () => {
  const location = useLocation();
  const { blog } = location.state || {};

  const transform = (node, index) => {
    if (node.type === "pre" && node.props.className === "ql-syntax") {
      return <CodeHighlighter key={index}>{node}</CodeHighlighter>;
    }
    return node;
  };

  return (
    <MyContainer
      borderRadius="lg"
      boxShadow="md"
      bg={useColorModeValue("white", "gray.800")}
      minH="100vh"
    >
      {blog && (
        <>
          <MetaData
            title={blog.title}
            description={blog.description}
            keywords={`Console Busters Blog Application, Console Busters, ${blog?.keywords}`}
          />

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

            <MyContainer p={10} minH="70vh">
              {ReactHtmlParser(blog.content, { transform })}
            </MyContainer>
          </VStack>

          <VStack mt={4} align="start" spacing={2} p={5}>
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
              <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
                Created By:{` @${blog.owner && blog.owner.username}`}
              </Text>
            </HStack>
          </VStack>
        </>
      )}
    </MyContainer>
  );
};

export default PublicViewBlog;
