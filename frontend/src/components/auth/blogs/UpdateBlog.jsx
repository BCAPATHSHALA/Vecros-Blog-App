import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Switch,
  VStack,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { AvailableBlogCategory } from "../../../constant";
import { updateBlog } from "../../../app/actions/userAction";
import { useEffect } from "react";
import { clearError, clearMessage } from "../../../app/reducers/userSlice";

const UpdateBlog = ({ blog }) => {
  const { handleSubmit, register, control, reset } = useForm({
    defaultValues: {
      title: blog.title,
      description: blog.description,
      content: blog.content,
      category: blog.category,
      isPublished: blog.isPublished,
    },
  });

  const { message, error, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const { title, description, content, category, isPublished } = data;
    dispatch(
      updateBlog(title, description, content, category, isPublished, blog._id)
    );
  };

  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
    if (message) {
      dispatch(clearMessage());
      reset({
        title: blog.title,
        description: blog.description,
        content: blog.content,
        category: blog.category,
        isPublished: blog.isPublished,
      });
    }
  }, [dispatch, error, message, reset, blog]);

  return (
    <Box
      w={{ base: "100%", md: "50vw" }}
      minH="100vh"
      p={4}
      borderRadius="lg"
      boxShadow="md"
      bg={useColorModeValue("white", "gray.800")}
      mx="auto"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} w="100%">
          <FormControl id="title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input {...register("title")} placeholder="Blog title" />
          </FormControl>

          <FormControl id="description" isRequired>
            <FormLabel>Description</FormLabel>
            <Input
              {...register("description")}
              placeholder="Blog description"
            />
          </FormControl>

          <FormControl id="content" isRequired>
            <FormLabel>Content</FormLabel>
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <ReactQuill
                  {...field}
                  theme="snow"
                  placeholder="Write your blog content here..."
                  style={{
                    minHeight: "50vh",
                    border: "1px solid #CBD5E0",
                    borderRadius: "md",
                  }}
                  formats={[
                    "header",
                    "font",
                    "size",
                    "bold",
                    "italic",
                    "underline",
                    "strike",
                    "blockquote",
                    "list",
                    "bullet",
                    "indent",
                    "link",
                    "image",
                    "color",
                  ]}
                  modules={{
                    toolbar: [
                      [{ header: "1" }, { header: "2" }, { font: [] }],
                      [{ size: [] }],
                      ["bold", "italic", "underline", "strike", "blockquote"],
                      [{ list: "ordered" }, { list: "bullet" }],
                      ["link"],
                      ["color"],
                      ["clean"],
                    ],
                  }}
                />
              )}
            />
          </FormControl>

          <FormControl id="category" isRequired>
            <FormLabel>Category</FormLabel>
            <Select placeholder="Select category" {...register("category")}>
              {AvailableBlogCategory.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="isPublished" mb="0">
              Published
            </FormLabel>
            <Switch
              id="isPublished"
              {...register("isPublished")}
              defaultChecked={blog.isPublished}
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="teal"
            size="lg"
            w="full"
            isLoading={loading}
          >
            Update Blog
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default UpdateBlog;
