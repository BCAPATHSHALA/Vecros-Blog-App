import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  HStack,
  Spinner,
  VStack,
  Text,
  Center,
  Card,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  Badge,
  Select,
} from "@chakra-ui/react";
import { FcEmptyTrash } from "react-icons/fc";
import { useState, useEffect } from "react";
import { fetchAllBlogsPulically } from "../../../app/actions/userAction";
import { AvailableBlogCategory } from "../../../constant";
import { useNavigate } from "react-router-dom";

const PublicBlogsList = () => {
  const dispatch = useDispatch();
  const { loading, blogList, totalPages, currentPage } = useSelector(
    (state) => state.user
  );

  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllBlogsPulically(currentPage, selectedCategory));
  }, [dispatch, currentPage, selectedCategory]);

  const handleFetchBlog = (blog) => {
    navigate(`/blog/${blog?.slug}`, { state: { blog } });
  };

  const onSubmitToPaginate = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(fetchAllBlogsPulically(newPage, selectedCategory));
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    dispatch(fetchAllBlogsPulically(1, e.target.value));
  };

  return (
    <VStack spacing={4} w="100%" overflow={"auto"} py={5}>
      {/* Category Filter */}
      <HStack spacing={4} mb={4}>
        <Select placeholder="All" onChange={handleCategoryChange}>
          {AvailableBlogCategory.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </Select>
      </HStack>

      {/* Blogs List */}
      {loading ? (
        <Spinner size="xl" />
      ) : blogList && blogList.length ? (
        <HStack
          width={"100%"}
          flexWrap={"wrap"}
          justifyContent={{ base: "center", md: "space-between" }}
        >
          {blogList.map((blog) => (
            <Card
              key={blog._id}
              w={"100%"}
              h={{ base: "auto", md: "500px" }}
              mb={4}
              bg={"#e5e5e5"}
            >
              <CardBody>
                <VStack
                  w="100%"
                  h="100%"
                  justifyContent="center"
                  p={5}
                  borderRadius={4}
                  bg={"gray.800"}
                >
                  <Heading
                    textAlign={"center"}
                    fontSize={{ base: "0.8rem", md: "1.5rem" }}
                    textTransform="uppercase"
                  >
                    {blog.title}
                  </Heading>
                  {blog.owner && (
                    <Badge colorScheme="green" variant="solid">
                      {`@${blog.owner.username}`}
                    </Badge>
                  )}
                  <Text
                    p={5}
                    textAlign={"center"}
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    {blog.description}
                  </Text>
                </VStack>
              </CardBody>
              <CardFooter
                bg={"#dad7cd"}
                borderBottomEndRadius={10}
                borderBottomStartRadius={10}
              >
                <VStack w="full" spacing={2}>
                  <Button
                    variant="solid"
                    colorScheme="green"
                    onClick={() => handleFetchBlog(blog)}
                  >
                    Read More
                  </Button>
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    color="gray.500"
                    textTransform="uppercase"
                    fontWeight={"900"}
                  >
                    {blog.category}
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
                    Created at: {new Date(blog.createdAt).toLocaleDateString()}
                  </Text>
                </VStack>
              </CardFooter>
            </Card>
          ))}
        </HStack>
      ) : (
        <Center minH={"50vh"}>
          <VStack>
            <FcEmptyTrash size={"8rem"} />
            <Text fontSize={{ base: "1.3rem", md: "1.5rem" }}>
              No Data Found
            </Text>
          </VStack>
        </Center>
      )}

      {/* Pagination Section */}
      <HStack spacing={4} mt={4}>
        <Button
          onClick={() => onSubmitToPaginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Text>
          Page {currentPage} of {totalPages}
        </Text>
        <Button
          onClick={() => onSubmitToPaginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </HStack>
    </VStack>
  );
};

export default PublicBlogsList;
