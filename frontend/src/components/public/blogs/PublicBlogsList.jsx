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
import CustomModal from "../../common/CustomModal";
import PublicViewBlog from "./PublicViewBlog";
import { fetchAllBlogsPulically } from "../../../app/actions/userAction";
import { AvailableBlogCategory } from "../../../constant"; // Import your blog categories

const PublicBlogsList = () => {
  const dispatch = useDispatch();
  const { loading, blogList, totalPages, currentPage } = useSelector(
    (state) => state.user
  );
  const [isFetchModalOpen, setIsFetchModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(fetchAllBlogsPulically(currentPage, selectedCategory));
  }, [dispatch, currentPage, selectedCategory]);

  const handleFetchBlog = (blog) => {
    setIsFetchModalOpen(true);
    setSelectedBlog(blog);
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
        <HStack width={"100%"} flexWrap={"wrap"} justifyContent={"center"}>
          {blogList.map((blog) => (
            <Card key={blog._id} maxW="sm" h={"400px"}>
              <CardBody>
                <VStack
                  w="100%"
                  h="100%"
                  justifyContent="center"
                  bg={"gray.800"}
                  p={5}
                  borderRadius={4}
                >
                  <Heading
                    textAlign={"center"}
                    fontSize={"1.5rem"}
                    textTransform="uppercase"
                  >
                    {blog.title}
                  </Heading>
                  {blog.owner && (
                    <Badge colorScheme="green" variant="solid">
                      {`@${blog.owner.username}`}
                    </Badge>
                  )}
                  <Text fontSize="md">{blog.description}</Text>
                </VStack>
              </CardBody>
              <Divider />
              <CardFooter>
                <HStack gap={4} p={2} justifyContent={"center"}>
                  <Button
                    variant="solid"
                    colorScheme="green"
                    onClick={() => handleFetchBlog(blog)}
                  >
                    Read More
                  </Button>
                  <Text
                    fontSize="sm"
                    color="gray.500"
                    textTransform="uppercase"
                    fontWeight={"900"}
                  >
                    {blog.category}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Created at: {new Date(blog.createdAt).toLocaleDateString()}
                  </Text>
                </HStack>
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

      {/* Modal for View */}
      <CustomModal
        isOpen={isFetchModalOpen}
        onClose={() => setIsFetchModalOpen(false)}
        title={`Created By: ${selectedBlog?.owner?.username}`}
        size={"full"}
      >
        <PublicViewBlog blog={selectedBlog} />
      </CustomModal>
    </VStack>
  );
};

export default PublicBlogsList;
