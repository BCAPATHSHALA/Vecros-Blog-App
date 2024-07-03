import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  HStack,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
  Text,
  Center,
  Select,
  Switch,
  FormControl,
  FormLabel,
  Box,
} from "@chakra-ui/react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import {
  deleteBlog,
  fetchAllProfileBlogs,
} from "../../../app/actions/userAction";
import { clearError, clearMessage } from "../../../app/reducers/userSlice";
import { AvailableBlogCategory } from "../../../constant";
import { useForm } from "react-hook-form";
import { FcEmptyTrash } from "react-icons/fc";
import CustomModal from "../../common/CustomModal";
import ViewBlog from "./ViewBlog";
import UpdateBlog from "./UpdateBlog";

const BlogsListForm = () => {
  const dispatch = useDispatch();
  const {
    message,
    error,
    loading,
    totalPages,
    currentPage,
    profileBlogList: blogs,
  } = useSelector((state) => state.user);

  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      page: 1,
      category: "",
      isPublished: true,
    },
  });

  const { page, category, isPublished } = watch();

  useEffect(() => {
    dispatch(fetchAllProfileBlogs(page, category, isPublished));
  }, [dispatch, isPublished, page, category]);

  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
    if (message) {
      dispatch(clearMessage());
    }
  }, [dispatch, error, message]);

  const onSubmit = (data, e) => {
    e.preventDefault();
    const { category, isPublished } = data;
    setValue("page", 1);
    dispatch(fetchAllProfileBlogs(1, category, isPublished));
  };

  const onSubmitToPaginate = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setValue("page", newPage);
    }
  };

  const handleDeleteBlog = (id) => {
    dispatch(deleteBlog(id));
  };

  const [isFetchModalOpen, setIsFetchModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleFetchBlog = (blog) => {
    setIsFetchModalOpen(true);
    setSelectedBlog(blog);
  };

  const handleUpdateBlog = (blog) => {
    setIsUpdateModalOpen(true);
    setSelectedBlog(blog);
  };

  return (
    <VStack spacing={4} w="100%" overflow={"auto"} py={5}>
      {/* Filter Form Section */}
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <HStack spacing={4} m={4} flexWrap={"wrap"} justifyContent="center">
          <FormControl
            display="flex"
            alignItems="center"
            flexBasis={{ base: "100%", sm: "45%", md: "30%" }}
          >
            <FormLabel htmlFor="isPublished" mb="0">
              Published
            </FormLabel>
            <Switch
              id="isPublished"
              {...register("isPublished")}
              defaultChecked={true}
            />
          </FormControl>

          <FormControl flexBasis={{ base: "100%", sm: "45%", md: "30%" }}>
            <Select placeholder="Select category" {...register("category")}>
              {AvailableBlogCategory.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </Select>
          </FormControl>
        </HStack>
      </form>

      {/* Blogs List */}
      {loading ? (
        <Spinner size="xl" />
      ) : blogs && blogs.length ? (
        <Box overflow="auto" w="full">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Published</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {blogs.map((blog) => (
                <Tr key={blog._id}>
                  <Td>{blog.title}</Td>
                  <Td>{blog.category}</Td>
                  <Td>{blog.isPublished ? "Yes" : "No"}</Td>
                  <Td>
                    <HStack spacing={2}>
                      <Button
                        colorScheme="teal"
                        size="sm"
                        onClick={() => handleUpdateBlog(blog)}
                      >
                        <FaEdit />
                      </Button>
                      <Button
                        colorScheme="blue"
                        size="sm"
                        onClick={() => handleFetchBlog(blog)}
                      >
                        <FaEye />
                      </Button>
                      <Button
                        colorScheme="red"
                        size="sm"
                        isLoading={loading}
                        onClick={() => handleDeleteBlog(blog._id)}
                      >
                        <FaTrash />
                      </Button>
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
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
          onClick={() => onSubmitToPaginate(page - 1)}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Text>
          Page {currentPage} of {totalPages}
        </Text>
        <Button
          onClick={() => onSubmitToPaginate(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </HStack>

      {/* Modal for View */}
      <CustomModal
        isOpen={isFetchModalOpen}
        onClose={() => setIsFetchModalOpen(false)}
        title="View Blog"
        size={"full"}
      >
        <ViewBlog blog={selectedBlog} />
      </CustomModal>

      {/* Modal for Update */}
      <CustomModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        title="Update Blog"
        size={"full"}
      >
        <UpdateBlog blog={selectedBlog} />
      </CustomModal>
    </VStack>
  );
};

export default BlogsListForm;
