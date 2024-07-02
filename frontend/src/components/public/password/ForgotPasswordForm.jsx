import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Center,
  Box,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { forgotPassword } from "../../../app/actions/userAction";
import { clearError, clearMessage } from "../../../app/reducers/userSlice";
import { IoIosArrowBack } from "react-icons/io";

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { email } = data;
    dispatch(forgotPassword(email));
  };

  const { message, error, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
    if (message) {
      dispatch(clearMessage());
    }
  }, [dispatch, error, message, navigate]);

  return (
    <Center minH={{ base: "70vh", md: "75vh" }}>
      <Box
        p={8}
        rounded="lg"
        shadow="md"
        w={{ base: "90%", sm: "80%", md: "50%" }}
      >
        <Link alignSelf={"start"} border={"none"} to="/login" mt={4}>
          <HStack>
            <IoIosArrowBack />
            <Text>login</Text>
          </HStack>
        </Link>
        <Heading mb={6} textAlign="center" fontSize={"1.5rem"}>
          Forgot Password
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                focusBorderColor="purple.300"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <Text color="red.500">{errors.email.message}</Text>
              )}
            </FormControl>
            <Button type="submit" colorScheme="purple" isLoading={loading}>
              Reset Password
            </Button>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default ForgotPasswordForm;
